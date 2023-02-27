import { Box, Image, Text, extendTheme } from "@chakra-ui/react";
import ApplyForm from "../Components/ApplyForm";


const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}
const theme = extendTheme({ breackpoints })
function Webdevelopemnt(){
    return(
        <Box>
            <Box>
                <Image src="/web-development.jpg" alt="web"/>
            </Box>
            <Box w="90%" m="auto" display={["","","","flex","flex","flex"]} mt={["25px","35px","40px","50px","60px","60px"]}>
                <Box textAlign="start" fontFamily="sans-serif" fontSize={["11px","12px","13px","14px","15px","15px"]} w={["","","","50%","50%","50%"]}>
                    <Text fontSize={["22px","25px","28px","30px","36px","36px"]} fontWeight="bold" >Web Design and Development Company In Nashik</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>Paarsh infotech Pvt Ltd is a Best Web Development Company In Nashik. Paarsh infotech Pvt Ltd has been promptly delivering professional web designing, content management , and web development services for years to start-ups and established Enterprises in the IT World.</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>We create both corporate web design as well as custom web design. WAMP is the most advanced technology for web application and open-source application development.</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>Web Development is a powerful, open-source platform that consists of the Windows operating system.</Text>
                </Box>
                <Box m="auto" w={["","","","50%","50%","50%"]}>
                    <Image src="/web_pic.PNG" borderRadius="5%"/>
                </Box>
            </Box>
            <ApplyForm coursetype={"Web Development"}/>
        </Box>
    )
}
export default Webdevelopemnt;