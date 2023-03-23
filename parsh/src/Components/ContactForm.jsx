import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { postContact } from '../Redux/ContactRedux/action';

const initialState = {
    name: "",
    phone_no: "",
    email: "",
    subject: "",
    message: ""
}
export default function ContactForm() {
    const toast=useToast()
    const dispatch=useDispatch()
    const [contact, setContact] = useState(initialState)
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setContact((prev)=>{
            return {...prev,[name]:value}
        })
    }
    const handlephone=(e)=>{
        const {name,value}=e.target;
        if(value>5){
            setContact((prev)=>{
                return {...prev,[name]:value}
            })
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(postContact(contact))
        toast({
            title: `Successful.`,
            description: `We will Connect You Soon.`,
            status: 'success',
            duration: 9000,
            isClosable: true,
            position:"top"
          })
        
        setContact(initialState)
    }
    
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Get In Touch
                    </Heading>

                </Stack>
                <form onSubmit={(e)=>handleSubmit(e)}>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input type="text" name="name" value={contact.name} onChange={(e)=>handleChange(e)}/>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Phone No</FormLabel>
                                    <Input  type="text" name="phone_no" maxlength='10' value={contact.phone_no}  onChange={(e)=> handlephone(e)} />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input  type="email" name="email" value={contact.email} onChange={(e)=>handleChange(e)}/>
                        </FormControl>
                        <FormControl id="text" isRequired>
                            <FormLabel>Subject</FormLabel>
                            <Input type="text" name="subject" value={contact.subject} onChange={(e)=>handleChange(e)}/>
                        </FormControl>
                        <FormControl id="message" isRequired>
                            <FormLabel>Messege</FormLabel>
                            <Input type="text" h="100px" name="message" value={contact.message} onChange={(e)=>handleChange(e)} />
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                type="submit"
                                loadingText="Submitting"
                                size="lg"
                                bg={'#FF9900'}
                                color={'white'}
                                _hover={{
                                    bg: 'white',
                                    color: "black",
                                    boxShadow: 'lg'
                                }}>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
                </form>
            </Stack>
        </Flex>
    );
}