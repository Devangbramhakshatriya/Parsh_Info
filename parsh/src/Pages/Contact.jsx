import { Box, Image, extendTheme, Text} from "@chakra-ui/react";
import ContactForm from "../Components/ContactForm";

const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}
const theme = extendTheme({ breackpoints })
function Contact(){
    return(
        <Box>
            <Box>
                <Image src="/contact.jpg"/>
            </Box>
            <Box w="90%" m="auto" display={["","","","flex","flex","flex"]} mt={["25px","35px","40px","50px","60px","60px"]} textAlign="start">
                <Box w={["","","","50%","50%","50%"]}  fontFamily="sans-serif" fontSize={["12px","14px","15px","15px","17px","17px"]}>
                    <Text fontSize={["22px","25px","28px","30px","36px","36px"]} fontWeight="bold">Our Located Place</Text>
                    <Text fontSize={["12px","14px","15px","15px","17px","17px"]} fontWeight="bold" color="#FF9900">If you require any level of business support for our services, please get in touch with us via the methods below:</Text>
                    
                    <Text fontWeight="bold" display="flex"><Image w="20px" h="20px" mt="4px" src="https://as2.ftcdn.net/v2/jpg/02/54/62/25/1000_F_254622588_6OClHyYpak64rVI8y9QVjUvDlStsDEu9.jpg"/> Address: Paarsh Infotech Office no 2 Bhakti Apartment, Near Rasoi Hotel , Suchita Nagar Mumbai Naka Nashik 422001</Text>

                    <Text fontWeight="bold" mt="20px" display="flex" gap="10px"><Image w="25px" src="https://cdn-icons-png.flaticon.com/512/732/732200.png"/>info@paarshinfotech.com</Text>
                    <Text fontWeight="bold" mt="10px" display="flex" gap="10px"><Image w="25px" src="https://cdn-icons-png.flaticon.com/512/732/732200.png"/>paarshinfotech@gmail.com</Text>

                    <Text fontWeight="bold" mt="20px" display="flex" gap="10px"><Image w="25px" src="https://cdn-icons-png.flaticon.com/512/890/890547.png"/>+91 9860988343/ +91 9075201035</Text>
                    
                </Box>
                <Box w={["","","","50%","50%","50%"]} m="auto"><ContactForm/></Box>
            </Box>
            <Box>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.6424794042196!2d73.78184023634839!3d19.981532299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebee73f7beb3%3A0x180f540ccce09ace!2sPAARSH%20INFOTECH%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1677344680269!5m2!1sen!2sin" width="100%" height="450px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </Box>
    )
}
export default Contact;