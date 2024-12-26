import React from 'react'
import { VStack,HStack,Text,Heading,Image } from '@chakra-ui/react'
import {Link} from 'react-router-dom';

const CoinCard = ({name,id,imgSrc,price,symbol,currencySymbol= "₹" }) => {
  return (
    <Link to= {`/coins/${id}`} >
    <VStack w={"52"} bgColor={'whiteAlpha.800'} shadow={"lg"} m={"4"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} 
    css={{ "&:hover":{transform:"scale(1.1)",},}}>

      <Image src={imgSrc} h={10} w={10}></Image>
      <Heading size={"md"} noOfLines={1}>{symbol} </Heading>
      <Text size={"sm"} noOfLines={1}>{name}</Text>
      <Text size={"sm"} noOfLines={1}>{price? `${currencySymbol}${price}`:"NA"}</Text>

 
    </VStack> 

  </Link>
      
      )
}

export default CoinCard;