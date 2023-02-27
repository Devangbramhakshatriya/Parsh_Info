import { Box, Button, Image, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, getCourse } from "../Redux/CourseRedux/action";

function Courses(){
    const { courses, isLoading, isError }=useSelector((store)=>{
        return store.courseReducer
    }
    )
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getCourse())
    },[])

    const handleDelete = (id) => {
        dispatch(deleteCourse(id)).then(()=>dispatch(getCourse()))
        
    }
    
    return(
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
                                <Th>Course</Th>
                                
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                courses.length>0 && courses.map((e, i) => (
                                    <Tr>
                                        <Td>{i + 1}</Td>
                                        <Td>{e.name}</Td>
                                        <Td>{e.email}</Td>
                                        <Td>{e.phone_no}</Td>
                                        <Td>{e.course}</Td>
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
export default Courses;