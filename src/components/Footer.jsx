import { Box, Button, Heading, HStack, Input, Stack, VStack,Text } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading size="md" textTransform={'uppercase'} textAlign={['center' , 'left']}>
                    Subscribe to get updates
                </Heading>
                <HStack
                 borderBottom={"2px solid white"} py="2"
                >
                <Input 
                  placeholder='Enter Email Here...'
                  border={'none'}
                  borderRadius="none"
                  outline={'none'}  
                  focusBorderColor="none"
                  />
                    <Button
                     p={0}
                     colorScheme={"purple"}
                     variant={"ghost"}
                     borderRadius={"0 20px 20px 0"}
                    >
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>

            <VStack w={"full"}
             borderLeft={['none', '1px solid white']}
             borderRight={['none', '1px solid white']}
            >
            <Heading textTransform={"uppercase"} textAlign={"center"}>
                Video Hub
            </Heading>
            <Text>All rights received</Text>
            </VStack>
            
            <VStack w={"full"} >
            <Heading textTransform={"uppercase"} textAlign={"center"}>
                Social Media
            </Heading>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a target={"black"} href='https://youtube.com/'>Youtube</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a target={"black"} href='https://instagram.com/crista._17'>Instagram</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a target={"black"} href='https://github.com/shalini170697'>Github</a>
            </Button>
            </VStack>
            
            
        </Stack>

    </Box>
  )
}

export default Footer;
