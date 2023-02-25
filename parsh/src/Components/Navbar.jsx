import { Box, Button, Image, Menu, MenuButton, MenuItem, MenuList, Text, extendTheme } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi"
import { useMediaQuery } from "react-responsive"
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
const breackpoints = {
    base: "420px",
    sm: "550px",
    md: "700px",
    lg: "850px",
    xl: "950px",
    "2xl": "1200px"
}
const theme = extendTheme({ breackpoints })
function Navbar() {
    const isnavlessthan500 = useMediaQuery({ query: '(max-width: 550px)' })
    return (

        <Box display="flex" justifyContent="space-between" bg="#7BAFEB" fontWeight="bold" boxShadow='dark-lg' position="sticky" top="0" zIndex="100">
            <Box display="flex" >
                <Image w={["20%", "20%", "20%", "20%", "30%", "50%"]} src="http://paarshinfotech.com/assets/img/logo4.png" />
                <Image w={["60%", "70%", "80%", "80%", "100%", "100%"]} src="http://paarshinfotech.com/assets/img/sppipvt.jpg" />
            </Box>
            {
                isnavlessthan500 ? <Menu>

                    <>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <HamburgerIcon />
                        </MenuButton>
                        <MenuList minWidth='600px'>
                            <RouterLink to="/">
                                <MenuItem>Home</MenuItem>
                            </RouterLink>
                            <RouterLink to="/contact">
                                <MenuItem>Contact Us</MenuItem>
                            </RouterLink>


                            <Menu>
                                <MenuButton as={Text} >
                                    <Text alignItems="center" display="flex">Courses <FiChevronDown size="20px" /></Text>

                                </MenuButton>
                                <MenuList>
                                    <RouterLink to="/course/webdevelopment">
                                        <MenuItem>Web Development</MenuItem>
                                    </RouterLink>
                                    <RouterLink to="/course/android">
                                        <MenuItem>Android</MenuItem>
                                    </RouterLink>
                                    <RouterLink to="/course/graphic">
                                        <MenuItem>Graphic</MenuItem>
                                    </RouterLink>
                                    <RouterLink to="/course/digitalmarketing">
                                        <MenuItem>Digital Marketing</MenuItem>
                                    </RouterLink>
                                </MenuList>
                            </Menu>
                        </MenuList>
                    </>

                </Menu>

                    :

                    <Box display="flex" justifyContent="space-evenly" w="80%" alignItems="center">
                        <RouterLink to="/">
                            <Text color="white">Home</Text>
                        </RouterLink>
                        <Menu>
                            <MenuButton as={Text} color="white">
                                <Text alignItems="center" display="flex">Courses <FiChevronDown size="20px" /></Text>

                            </MenuButton>
                            <MenuList>
                                <RouterLink to="/course/webdevelopment">
                                    <MenuItem>Web Development</MenuItem>
                                </RouterLink>
                                <RouterLink to="/course/android">
                                    <MenuItem>Android</MenuItem>
                                </RouterLink>
                                <RouterLink to="/course/graphic">
                                    <MenuItem>Graphic</MenuItem>
                                </RouterLink>
                                <RouterLink to="/course/digitalmarketing">
                                    <MenuItem>Digital Marketing</MenuItem>
                                </RouterLink>
                            </MenuList>
                        </Menu>

                        <RouterLink to="/contact">
                            <Text color="white">Contact</Text>
                        </RouterLink>
                        <Text color="white">About</Text>
                        <Text color="white">Internship</Text>
                        <RouterLink to="/admin">
                            <Button>Admin</Button>
                        </RouterLink>
                    </Box>
            }

        </Box>
    )
}
export default Navbar;