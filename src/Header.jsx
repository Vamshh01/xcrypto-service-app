import React from 'react'
import { HStack,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack bgColor={"blackAlpha.900"} shadow={"base"} p={"4"} color={"whiteAlpha.900"} spacing={"5"} >

    <Button variant={"unstyled"}>  
  <Link to={"/"}>Home</Link>
    </Button>

    <Button variant={"unstyled"}>
      <Link to={"/coins"}>Coins</Link>
      </Button>

 <Button variant={"unstyled"} >
   <Link to={"/exchange"}>Exchange</Link>
 </Button>

  </HStack>
  )
}

export default Header
