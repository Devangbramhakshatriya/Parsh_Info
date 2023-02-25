import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import Contact from "../Admin/Contact";
import Courses from "../Admin/Courses";

function Admin() {
    const [contact, setContact] = useState(false)
    const [course, setCourse] = useState(false)
    const handleContact = () => {
        setContact(true)
        setCourse(false)
    }
    const handleCourse = () => {
        setContact(false)
        setCourse(true)
    }
    return (
        <Box>
            <Box mt="50px" >
                <Button onClick={handleContact} mr="10px">See All Contacts</Button>
                <Button onClick={handleCourse}>See All Applied Courses</Button>
            </Box>
            {
                contact ? 
                <Contact/>:""
            }
            {
                course ?
                <Courses/>:""
            }
            {
                contact ==false && course==false ? 
                <Box h="300px"></Box>
                
                :""
            }
        </Box>
    )
}
export default Admin;