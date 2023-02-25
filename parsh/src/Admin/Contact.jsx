import { Box, Button, Image, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContact } from "../Redux/ContactRedux/action";

function Contact() {
    const { contacts, isLoading, isError } = useSelector((store) => {
        return store.contactReducer
    }
    )
    console.log(isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContact())
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteContact(id))
        dispatch(getContact())
    }
    console.log(contacts)
    return (
        <Box>
            {
                isLoading ? <Image m="auto" src="https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif"/>

                    :
                    
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Sr. No</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Phone No</Th>
                                <Th>Subject</Th>
                                <Th>Message</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                contacts.length>0 && contacts.map((e, i) => (
                                    <Tr>
                                        <Td>{i + 1}</Td>
                                        <Td>{e.name}</Td>
                                        <Td>{e.email}</Td>
                                        <Td>{e.phone_no}</Td>
                                        <Td>{e.subject}</Td>
                                        <Td>{e.message}</Td>
                                        <Td><Button onClick={() => handleDelete(e.id)}>Delete</Button></Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>

            }

        </Box>
    )
}
export default Contact;