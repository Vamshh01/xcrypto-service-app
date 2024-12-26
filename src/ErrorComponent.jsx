import React from 'react'
import {Alert , AlertIcon} from '@chakra-ui/react';


const ErrorComponent = ({message}) => {
  return (
    <Alert status="error" position={"fixed"} top={"14"} left={"50%"} transform={"Translate(-50%)"} w={"container".lg}>

      <AlertIcon/>{message}
    </Alert>

  )
}

export default ErrorComponent