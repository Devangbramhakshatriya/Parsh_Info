import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
    useToast,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postCourse } from '../Redux/CourseRedux/action';
  

  const initialState={
    name:"",
    phone_no:"",
    course:"",
    email:""
  }
  export default function ApplyForm({coursetype}) {
    initialState.course=coursetype
    const toast=useToast()
    const dispatch=useDispatch()
    const [course, setCourse] = useState(initialState)
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setCourse((prev)=>{
            return {...prev,[name]:value}
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(postCourse(course))
        toast({
          title: `Successful.`,
          description: `Applied for ${coursetype}.`,
          status: 'success',
          duration: 9000,
          isClosable: true,
          position:"top"
        })
      
        setCourse(initialState)
    }
    
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Apply For {coursetype} Course</Heading>
          </Stack>
          <form onSubmit={(e)=>handleSubmit(e)}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={course.name} onChange={(e)=>handleChange(e)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={course.email} onChange={(e)=>handleChange(e)} />
              </FormControl>
              <FormControl id="contact">
                <FormLabel>Contact</FormLabel>
                <Input type="text" name="phone_no" value={course.phone_no} onChange={(e)=>handleChange(e)}/>
              </FormControl>
              <FormControl id="type">
                <FormLabel>Course</FormLabel>
                <Input type="text" value={coursetype} name="course" onChange={(e)=>handleChange(e)}/>
              </FormControl>
              <Stack spacing={10}>
                
                <Button
                  type="submit"
                  bg={'#FF9900'}
                  color={'white'}
                  _hover={{
                    bg: 'white',
                    color:"black",
                    boxShadow:'lg'
                  }}>
                  Apply
                </Button>
              </Stack>
            </Stack>
          </Box>
          </form>
        </Stack>
      </Flex>
    );
  }