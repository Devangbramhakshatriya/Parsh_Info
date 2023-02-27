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
function Graphic(){
    return(
        <Box>
            <Box>
                <Image src="/graphics.jpg"/>
            </Box>
            <Box w="90%" m="auto" display={["","","","flex","flex","flex"]} mt={["25px","35px","40px","50px","60px","60px"]}>
                <Box textAlign="start" fontFamily="sans-serif" fontSize={["11px","12px","13px","14px","15px","15px"]} w={["","","","50%","50%","50%"]}>
                    <Text fontSize={["22px","25px","28px","30px","36px","36px"]} fontWeight="bold" >Best Graphic Design Company In Nashik</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>A strong identity created over time is the best guarantee of future earnings. Build confidence in your graphics design skills and enjoy the new insights.</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>Paarsh Infotech is a best Graphic Design Company in Nashik. Create social media design artwork based on your drawings. Learn from step-by-step instructions.</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>It is a way to learn and remember to speed up your design process. Bring your ideas to life and stay motivated through daily emails and lessons.</Text>
                </Box>
                <Box m="auto" w={["","","","50%","50%","50%"]}>
                    <Image src="/graphics_pic.PNG" borderRadius="5%"/>
                </Box>
            </Box>
            <ApplyForm coursetype={"Graphic Design"}/>
        </Box>
    )
}
export default Graphic;