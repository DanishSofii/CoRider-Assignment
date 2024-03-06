import { Container, FormControl, Input, Popover, PopoverTrigger,Button, Portal, PopoverContent, PopoverArrow, PopoverBody, Spacer } from "@chakra-ui/react"
import { faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import videoIcon from "./video.ico"
import cameraIcon from "./cmr.ico"
import documentIcon from "./document.ico"
import sendIcon from "./send (2).ico"
function Footer() {
   
    return (
        <Container height="114px" width="100%" position="fixed" bottom="0" bg="#FAF9F4" display="flex" alignItems="center" justifyContent="center" >
            <Container h="58px" w="375px" p="8px 16px 8px 16px" gap="12px" bg="#FAF9F4">
            <FormControl h="32px" w="343px" bg="#fff" borderRadius="8px" p="11px 12px  11px 12px" gap="16px" display="flex" alignItems="center">
                <Input type="text" name="Reply" placeholder="Reply" h="18px" w="247px"border="none" outline="none" />
                <Spacer/>
                <Popover placement="top" >
                        <PopoverTrigger >
                            <Button bg="none" border="none"><FontAwesomeIcon icon={faPaperclip} h="20px" w="20px"/></Button>
                        </PopoverTrigger>
                        <Portal >
                            <PopoverContent  h="44px" w="124px" p="12px 16px 12px 16px" gap="16px" bg="#008000" borderRadius="999px"display="flex" alignItems="center" justifyContent="center">
                               
                                <PopoverArrow  bg="#008000" />
                                
                                <PopoverBody display="flex" gap="16px"  >
                                    <Button bg="none" border="none"  ><img style={{height:"20px",width:"20px"}} src={cameraIcon} alt="" /></Button>
                                    <Button bg="none" border="none"  ><img style={{height:"20px",width:"20px"}} src={videoIcon} alt="" /></Button>
                                    <Button bg="none" border="none" ><img style={{height:"20px",width:"20px"}} src={documentIcon} alt="" /></Button>
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                </Popover>
                <Button bg="none" border="none"><img style={{height:"20px",width:"20px"}} src={sendIcon} alt=""/></Button>

            </FormControl>

            </Container>
        </Container>
    )
}

export default Footer
