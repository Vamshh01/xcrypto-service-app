import React from 'react'
import { Box,Image,Text} from '@chakra-ui/react'
import btcImg from './assets/btc.png';
import {motion, transform} from "framer-motion";

const Home = () => {
  return (
    <Box w={"full"} h={"85vh"} bgColor={"blackAlpha.900"} >
      <motion.div
      
      style={{
        height: "80vh",
      }}
      animate={{
        translateY: "20px",
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}>
      <Image src={btcImg} w={"full"} h={"full"} objectFit={"contain"} filter={"grayscale(1)"}></Image>
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Xcrypto
      </Text>

    </Box>
  )
}

export default Home