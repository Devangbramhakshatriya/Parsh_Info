import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import Android from "../Pages/Android";
import Contact from "../Pages/Contact";
import Course from "../Pages/Course";
import DigitalMarketing from "../Pages/DigitalMarketing";
import Graphic from "../Pages/Graphic";
import Home from "../Pages/Home";
import Webdevelopemnt from "../Pages/WebDevelopment";

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/course" element={<Course/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/course/webdevelopment" element={<Webdevelopemnt/>}/>
            <Route path="/course/graphic" element={<Graphic/>}/>
            <Route path="/course/digitalmarketing" element={<DigitalMarketing/>}/>
            <Route path="/course/android" element={<Android/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    )
}
export default AllRoutes;