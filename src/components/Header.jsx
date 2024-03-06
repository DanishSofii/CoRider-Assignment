import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, Spacer, Text,Avatar, Button } from "@chakra-ui/react"
import "@fontsource/mulish";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState,useEffect } from "react";

function Header() {
    const [data, setData] = useState(null);

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
          console.log("fjaesf",resultData);
          
          // console.log(resultData.chats[0].id)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
    return (
        
        <Container p="20px 16px 16px 16px" borderBottom="1px solid #E5E5E0" position="fixed" zIndex={10} bg="#FAF9F4" width="100%">
            <Flex alignItems="center" p="0px" mb="16px" flex={10} pr="40px" >
                <ArrowBackIcon w="24px" h="24px" mr="10px"/>
                {data && (<Text fontFamily="mulish" fontWeight={700} lineHeight="30.12px" color="#141E0D" w="275px" h="30px" fontSize="24px" textAlign="left" >{data.name}</Text>)}
                <Spacer/>
                <EditIcon w="20px" h="20px"/>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center"  pr="45px" >
                <Container  w="48px" h="48px" border="1px solid #fff" mr="16px" display="flex"  flexDirection="row" borderRadius="50%" overflow="hidden" >
                        <div >
                        <img style={{height:"26px",width:"26px"}} src="/img/av3.jpeg" alt="" />
                        <img style={{height:"26px",width:"26px" ,position:"relative", top:"-4px"}}  src="/img/av4.jpeg" alt="" />
                        </div>
                        <div>
                        <img style={{height:"26px",width:"26px",position:"relative", right:"2px"}}  src="/img/av2.jpeg" alt="" />
                        <img style={{height:"26px",width:"26px",position:"relative", top:"-4px",position:"relative", right:"2px"}}  src="/img/av1.jpeg" alt="" />
                        </div>
                </Container>
                <Flex w="215px" h="46px" flexDirection="column" alignItems="start">
                    <Flex>
                    <Text fontFamily="mulish" textAlign="left" fontWeight={500} lineHeight="22.59px" mr="10px">From</Text>
                    {data && (<Text fontFamily="mulish" textAlign="left" fontWeight={700} lineHeight="22.59px">{data.from}</Text>)}
                    </Flex>
                    <Flex>
                    <Text fontFamily="mulish" textAlign="left" fontWeight={500} lineHeight="22.59px" mr="10px">To</Text>
                    {data && (<Text fontFamily="mulish" textAlign="left" fontWeight={700} lineHeight="22.59px">{data.to}</Text>)}
                    </Flex>
                </Flex>
                <Spacer/>
                <Button border="none" bg="none" >
                <FontAwesomeIcon icon={faEllipsisVertical} h="24px" w="24px" bg="blue"/>
                </Button>
            </Flex>

        </Container>
    )
}

export default Header
