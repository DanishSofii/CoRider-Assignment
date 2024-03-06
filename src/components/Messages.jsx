import { Avatar, AvatarBadge, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "@fontsource/mulish";
import { CheckCircleIcon } from "@chakra-ui/icons";
import img from "./image.png";
import Header from "./Header";

function Messages() {
  const [data, setData] = useState();

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
        console.log(resultData);
        
        // console.log(resultData.chats[0].id)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return data ? (
    
    <Flex as="div"  flexDirection="column" padding="20px" zIndex={1}>
    
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
  ); // Return null or a loading indicator if data is not yet available
}

export default Messages;
