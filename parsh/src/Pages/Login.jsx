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
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postLogin } from '../Redux/AuthReducer/action';
  

  const initialState={
    email:"",
    password:""
  }
  export default function Login() {
    const [detail,setDetail]=useState(initialState)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setDetail((prev)=>{
            return {...prev,[name]:value}
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(postLogin(detail))
        setDetail(initialState)
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <form onSubmit={(e)=>handleSubmit(e)}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={detail.email} onChange={(e)=>handleChange(e)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" value={detail.password} onChange={(e)=>handleChange(e)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
          </form>
        </Stack>
      </Flex>
    );
  }