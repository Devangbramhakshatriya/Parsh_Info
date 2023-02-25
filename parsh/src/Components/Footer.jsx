import { Box, Text, extendTheme, Image } from "@chakra-ui/react";
import styles from "./footer.module.css"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import { AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BsYoutube } from "react-icons/bs"
import {BiLocationPlus} from "react-icons/bi"
import {CgPhone} from "react-icons/cg"
import {RiMailSendLine} from "react-icons/ri"
const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}
const theme = extendTheme({ breackpoints})
function Footer() {
    return (
        <Box mt="30px">
            <Box className={styles.background} >
                <Box m="auto" backgroundColor="blackAlpha.900" color="white"  textAlign="start">
                    <Box display={["", "", "flex", "flex", "flex", "flex"]} gap="40px" m="auto" textAlig="start" p="2%">
                        <Box   display={["", "flex", "flex", "flex", "flex", "flex"]} gap="20px"  textAlig="start" w={["100%","50%"]}  m="auto" >
                            <Box  mt="20px" w={["100%","50%"]}  m="auto">
                                <Box display="flex" >
                                    <Image w={["10%","10%","10%","10%","20%","50%"]} src="http://paarshinfotech.com/assets/img/logo4.png" />
                                    <Image w={["50%","60%","60%","80%","100%","100%"]} src="http://paarshinfotech.com/assets/img/sppipvt.jpg" />
                                </Box>
                                <Text>Paarsh Infotech Pvt Ltd provides more than website design and Software development..</Text>
                                <Box display="flex">
                                    <FaFacebookSquare color="#FF9900" size="40px" />
                                    <FaTwitterSquare color="#FF9900" size="40px" />
                                    <AiFillInstagram color="#FF9900" size="40px" />
                                    <BsYoutube color="#FF9900" size="40px" />
                                    <AiFillLinkedin color="#FF9900" size="40px" />
                                </Box>
                            </Box>
                            <Box w={["100%","50%"]}  m="auto" >
                                <Text fontWeight="bold" fontSize={["20px", "26px", "26px", "28px", "33px", "33px"]}>Useful Links</Text>
                                <Box fontSize={["12px", "14px", "16px", "18px", "18px", "20px"]}>
                                    <Text _hover={{color:"#FF9900",fontWeight:"bold",}}>Home</Text>
                                    <Text _hover={{color:"#FF9900",fontWeight:"bold",}}>About</Text>
                                    <Text _hover={{color:"#FF9900",fontWeight:"bold",}}>Services</Text>
                                    <Text _hover={{color:"#FF9900",fontWeight:"bold",}}>Career</Text>
                                    <Text _hover={{color:"#FF9900",fontWeight:"bold",}}>Team</Text>
                                    <Text _hover={{color:"#FF9900",fontWeight:"bold",}}>Contact</Text>
                                    <Text _hover={{color:"#FF9900",fontWeight:"bold",}}>Blogs</Text>
                                </Box>
                            </Box>
                        </Box>



                        <Box w={["100%","50%"]}  m="auto" display={["", "flex", "flex", "flex", "flex", "flex"]} gap="20px" >
                            <Box textAlign="start" w={["100%","50%"]}  m="auto">
                                <Text fontWeight="bold" fontSize={["20px", "26px", "26px", "28px", "33px", "33px"]}>
                                     In Touch
                                </Text>
                                <Text display="flex" gap="20px" fontWeight="bold" fontSize={["16px", "16px", "18px", "20px", "22px", "24px"]}><BiLocationPlus size="40px" color="#FF9900"/>Address</Text>
                                <Text>Paarsh Infotech Pvt Ltd. Office no 1 Bhakti Apartment, Near Rasoi Hotel , Suchita Nagar Mumbai Naka Nashik 422001</Text>

                                <Text mt="10px" display="flex" gap="20px" fontWeight="bold" fontSize={["16px", "16px", "18px", "20px", "22px", "24px"]}><BiLocationPlus size="40px" color="#FF9900"/>Address</Text>
                                <Text>Paarsh Infotech Pvt Ltd. Behind Bank of Maharashtra, Near Indrakund Devasthan, Panchavati Karanja, Nashik-422003</Text>
                            </Box>
                            <Box w={["100%","50%"]}  m="auto"  >
                            <Text fontWeight="bold" fontSize={["20px", "26px", "26px", "28px", "33px", "33px"]}>
                                     In Touch
                                </Text>
                                <Text display="flex" gap="20px" fontWeight="bold" fontSize={["16px", "16px", "18px", "20px", "22px", "24px"]}><CgPhone color="#FF9900" size="40px"/>Phone</Text>
                                <Text>+91 9860988343/+91 9075201035</Text>
                                <Text display="flex" gap="20px" fontWeight="bold" fontSize={["16px", "16px", "18px", "20px", "22px", "24px"]}><RiMailSendLine color="#FF9900" size="40px"/>Email</Text>
                                <Text>paarshinfotech@gmail.com</Text>
                                <Text display="flex" gap="20px" fontWeight="bold" fontSize={["16px", "16px", "18px", "20px", "22px", "24px"]}><RiMailSendLine color="#FF9900" size="40px"/>Email</Text>
                                <Text>info@paarshinfotech.com</Text>
                            </Box>   
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box w="100%" bg="#121F34" p="1.5%">
                <Text color="white">Copyright ©2022 PAARSH INFOTECH PVT LTD. </Text>
            </Box>
        </Box>
    )
}
export default Footer;