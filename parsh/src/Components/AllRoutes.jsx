import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import Android from "../Pages/Android";
import Contact from "../Pages/Contact";
import Course from "../Pages/Course";
import DigitalMarketing from "../Pages/DigitalMarketing";
import Graphic from "../Pages/Graphic";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Webdevelopemnt from "../Pages/WebDevelopment";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course/webdevelopment" element={<Webdevelopemnt />} />
            <Route path="/course/graphic" element={<Graphic />} />
            <Route path="/course/digitalmarketing" element={<DigitalMarketing />} />
            <Route path="/course/android" element={<Android />} />
            <Route path="/admin" element={
                <PrivateRoute>
                    <Admin />
                </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
export default AllRoutes;