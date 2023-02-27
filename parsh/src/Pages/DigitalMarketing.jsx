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
function DigitalMarketing(){
    return(
        <Box>
            <Box>
                <Image src="/digital.jpg"/>
            </Box>
            <Box w="90%" m="auto" display={["","","","flex","flex","flex"]} mt={["25px","35px","40px","50px","60px","60px"]}>
                <Box textAlign="start" fontFamily="sans-serif" fontSize={["11px","12px","13px","14px","15px","15px"]} w={["","","","50%","50%","50%"]}>
                    <Text fontSize={["22px","25px","28px","30px","36px","36px"]} fontWeight="bold" >Digital Marketing Agency In Nashik</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>Digital marketing is the component of marketing that utilizes the internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services.</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>Digital platforms became increasingly incorporated into marketing plans and everyday life. Now, people increasingly use digital devices instead of visiting physical shops.</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>Digital platforms became increasingly incorporated into marketing plans and everyday life. Now, people increasingly use digital devices instead of visiting physical shops.</Text>
                </Box>
                <Box m="auto" w={["","","","50%","50%","50%"]}>
                    <Image src="/digital_pic.PNG" borderRadius="5%"/>
                </Box>
            </Box>
            <ApplyForm coursetype={"Digital Marketing"}/>
        </Box>
    )
}
export default DigitalMarketing;