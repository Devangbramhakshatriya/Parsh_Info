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
function Android(){
    return(
        <Box>
            <Box>
                <Image src="/android.jpg"/>
            </Box>
            <Box w="90%" m="auto" display={["","","","flex","flex","flex"]} mt={["25px","35px","40px","50px","60px","60px"]}>
                <Box textAlign="start" fontFamily="sans-serif" fontSize={["11px","12px","13px","14px","15px","15px"]} w={["","","","50%","50%","50%"]}>
                    <Text fontSize={["22px","25px","28px","30px","36px","36px"]} fontWeight="bold" >Best Android App Development Company In Nashik</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>Mobile devices and smartphones have become part of life nowadays. They have completely transformed the way we do business today. Android is the most used mobile OS. Android powers millions of mobile devices today.</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>The main advantage of Android App Development has over other popular OS such as iOS. It has an open marketplace for distributing your apps.</Text>
                    <Text mt={["5px","6px","8px","8px","20px","10px"]}>We care for your business. So we provide proficient android developers and thought-provoking designers. They have more than +5 years of experience in android app development services.</Text>
                </Box>
                <Box m="auto" w={["","","","50%","50%","50%"]}>
                    <Image src="/android_pic.PNG" borderRadius="5%"/>
                </Box>
            </Box>
            <ApplyForm coursetype={"Android App Development"}/>
        </Box>
    )
}
export default Android;