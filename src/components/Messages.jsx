import { Avatar, Flex, Text,Container} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import "@fontsource/mulish";
import img from "./image.png";

function Messages() {
  const [data, setData] = useState();
  const [date, setDate] =useState("");
  const [mode,setMode] =useState("online")
  const containerRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://qa.corider.in/assignment/chat?page=0#"
        );
        if (!response.ok) {
          console.log("Error fetching data");
        }
        const resultData = await response.json();
        setData(resultData);
        // console.log(resultData);

        localStorage.setItem("messageData",JSON.stringify(resultData));

        const timestamp = resultData.chats[0].time;
        const newDate = new Date(timestamp);
        const day = newDate.getDate();
        const month= newDate.toLocaleString('en-US',{month:'short'}).toUpperCase();
        const year = newDate.getFullYear();
        const formatedDate = `${day} ${month}, ${year}`;
        setDate(formatedDate);
        
        // console.log(resultData.chats[0].id)
      } catch (error) {
        console.log(error);
        let collection = localStorage.getItem("messageData");
        setData(JSON.parse(collection));
        setMode("offline")
      }
    };

    fetchData();

  }, []);
  useEffect(() => {
    console.log("Updating scroll position...");
    if (containerRef.current) {
      // console.log("Container ref:", containerRef.current);
      setTimeout(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }, 0);
    }
  }, [data]);
  
  return data ? (
    
    <Flex as="div"  flexDirection="column" padding="20px"  position='relative'   top="133px"  bottom="114px" overflowY="auto"  >
      <div>
        { mode === 'offline'? <div> You're offline</div>: null}
      </div>
    <Container display="flex" alignItems="center">
      <Container h="0" w="30%" border="1px solid #B7B7B7"></Container> <Text color="#B7B7B7" fontFamily="mullish" fontWeight={400} fontSize="14px" lineHeight="17.57px" width="40%">{date}</Text> <Container h="0" w="30%" border="1px solid #B7B7B7"></Container>
    </Container>
    {data.chats.map((item, index) => (
      
      <Flex
        maxW="319px"
        gap="8px"
        position="relative"
        mt="20px"
        // left="16px"
        key={index}
        alignSelf={item.sender.self === false ? "flex-start": "flex-end"}
        justifyContent={item.sender.self === false ? "flex-start": "flex-end"}
      >
        { item.sender.self === false ? <Avatar w="24px" h="24px" src={item.sender.image} borderRadius="50%">
          {item.sender.is_kyc_verified === false ? null : <img
            src={img}
            alt="Badge"
            style={{
              width: "16px",
              height: "16px",
              position:"absolute",
              borderRadius: "50%",
              width: "7.64px",
              height: "7.64px",
              top: "16.36px",
              left: "16.36px",  
            }}
          />}
        </Avatar>: null}
        <Text
          textAlign="justify"
          borderRadius={item.sender.self === false ? "0px 12px 12px 12px" :"12px 12px 0px 12px"}
          bg={item.sender.self === false ? "white" :"#1C63D5"}
          p="8px"
          fontFamily="mullish"
          fontWeight={400}
          fontSize="14px"
          lineHeight="17.57px"
          color={item.sender.self === false ? "#606060" : "#fff"}
        >
          {item.message}
        </Text>
      </Flex>
      
    ))}</Flex>
    ) : (
    <div>Loading</div>
  );
}

export default Messages;
