import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, Spacer, Text,Avatar } from "@chakra-ui/react"
import "@fontsource/mulish";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <Container p="20px 16px 16px 16px" borderBottom="1px solid #E5E5E0  ">
            <Flex alignItems="center" p="0px" mb="16px" >
                <ArrowBackIcon w="24px" h="24px" mr="10px"/>
                <Text fontFamily="mulish" fontWeight={700} lineHeight="30.12px" color="#141E0D" w="275px" h="30px" fontSize="24px" textAlign="left" >Trip name</Text>
                <Spacer/>
                <EditIcon w="20px" h="20px" />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
                <Avatar name="Chat" w="48px" h="48px" border="1px" mr="16px" src="/img/yoshi.png" borderRadius="50%"/>
                <Flex w="215px" h="46px" flexDirection="column" alignItems="start">
                    <Flex>
                    <Text fontFamily="mulish" textAlign="left" fontWeight={500} lineHeight="22.59px" mr="10px">From</Text>
                    <Text fontFamily="mulish" textAlign="left" fontWeight={700} lineHeight="22.59px">IGI </Text>
                    </Flex>
                    <Flex>
                    <Text fontFamily="mulish" textAlign="left" fontWeight={500} lineHeight="22.59px" mr="10px">To</Text>
                    <Text fontFamily="mulish" textAlign="left" fontWeight={700} lineHeight="22.59px">gtija </Text>
                    </Flex>
                </Flex>
                <Spacer/>
                <FontAwesomeIcon icon={faEllipsisVertical} h="24px" w="24px" />
            </Flex>

        </Container>
    )
}

export default Header
