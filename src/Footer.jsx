import React from 'react'
import {Box,VStack,HStack,Stack, Avatar,Text} from "@chakra-ui/react"
import finalPic from './assets/vamshipic.png';
const Footer = () => {
  return (
   <Box bgColor={"blackAlpha.900"} px={"20"} py={["16","8"]} color={"whiteAlpha.700"} w={'full'} minH={"48"} textAlign={["center","flex-start"]} >
    <Stack direction={["column", "row"]} h={"full"} w={"full"}>
      <VStack w={"full"} alignItems={["center","flex-start"]}>
        <Text fontWeight={"bold"}>About us </Text>
        <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>we are the best Crypto Trading app in India, we provide our guidence at a very low price</Text>
        
      </VStack> 
      <VStack >
        <Avatar boxSize={"28"} mt={["4","0"]} src={finalPic}/>
        <Text>Our Founder</Text>
      </VStack>

    </Stack>


   </Box>
  )
}

export default Footer
