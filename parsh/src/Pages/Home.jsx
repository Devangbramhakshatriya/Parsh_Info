import { Box, extendTheme, Image, Text } from "@chakra-ui/react";
import styles from "./home.module.css"
import { MdDone } from "react-icons/md"
const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}
const theme = extendTheme({ breackpoints })
function Home() {
    return (
        <Box>
            <Box className={styles.topbanner} w="100%" fontFamily="sans-serif" color="white" h="600px"  >
                <Box w="100%" h="100%" m="auto" backgroundColor="blackAlpha.500" display="flex" alignItems="center">
                    <Box display="flex" w="50%" alignItems="center" m="auto" >
                        <Text fontSize={["30px", "32px", "35px", "40px", "50px", "50px"]} fontWeight="bold" >Best Software Development Company In Nashik</Text>
                    </Box>
                </Box>
            </Box>
            <Box className="aour courses" display={["", "flex", "flex", "flex", "flex", "flex"]} w="95%" m="auto" mt={["23px", "28px", "28px", "30px", "38px", "38px"]} gap={["30px", "40px", "50px", "60px", "80px", "80px"]} textAlign="start"  >
                
                <Box fontFamily="sans-serif" w="55%">
                <Text color="#FF9900" fontWeight="bold">About Us</Text>
                    <Text fontWeight="bold" fontSize={["23px", "28px", "28px", "30px", "38px", "38px"]}>Explore Our Featured</Text>
                    <Text fontSize={["12px", "14px", "16px", "18px", "18px", "20px"]} >Paarsh Infotech Pvt Ltd provides more than website design and Software development. Your business, web presence, and brand identity will be taken to the next level. And Also providing solutions for corporate Web Designing, Web Application Development, Mobile Application Development, Software Development, Digital Marketing, Software Testing, and many more.</Text>
                    <Box mt="3%" fontFamily="sans-serif" fontSize={["11px", "13px", "15px", "17px", "17px", "90px"]} >
                        <Text mt="2%" gap="5px" display="flex"><MdDone  size="20px" color="#7BAFEB"/>Web Design & Development</Text>
                        <Text mt="2%" gap="5px" display="flex"><MdDone size="20px" color="#7BAFEB" /> Software Development</Text>
                        <Text mt="2%" gap="5px" display="flex"><MdDone size="20px" color="#7BAFEB"/>Mobile App Development</Text>
                        <Text mt="2%" gap="5px" display="flex"><MdDone  size="20px" color="#7BAFEB"/>E-commerce Website Development</Text>
                        

                    </Box>
                </Box>
                <Box m="auto" w="45%" p="1%" >
                    <Image src="http://paarshinfotech.com/assets/img/home-one/cost1.jpg" borderRadius="6%" m="auto" />

                </Box>

            </Box>
        </Box>
    )
}
export default Home;