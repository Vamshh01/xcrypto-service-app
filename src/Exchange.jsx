import React, { useEffect } from 'react'
import {server} from './main.jsx';
import {Container,HStack,VStack,Image,Heading,Text} from '@chakra-ui/react'
import { useState } from 'react';
import { SiTruenas } from 'react-icons/si';
import { TbRuler } from 'react-icons/tb';
import Loader from './Loader.jsx';
import ErrorComponent from './ErrorComponent.jsx';


const Exchange = () => {
  
  const [exchange, setExchange] = useState([]);
  const [loader, setLoader] = useState(true);
  const[error, setError] = useState(false);


  useEffect(()=>{

    const fetchAllData = async()=>{

     try{
      const response = await fetch(`${server}/exchanges?per_page=250`);
      const data = await response.json();
      console.log(data);
      setExchange(data);
      setLoader(false);
     }
     catch(error){
        setError(true);
        setLoader(false);

     }

    }
    fetchAllData();

  },[])

  if(error) return(
    <ErrorComponent message = {"api couldn't be fetched properly try again later"}/>
  );



  return (

    <Container  maxW={"container.xl"}  justifyContent={"center"}>
      {loader?<Loader/>: (
 
      <HStack wrap={"wrap"} justifyContent={"center"} >
     {exchange.map((i)=> (
       
      <EchangeCard name={i.name} imgSrc={i.image} rank={i.trust_score_rank} url={i.url} key={i.key} />
      ))}
      </HStack>

      )}
    
      </Container>
  
  )
}
const EchangeCard= ({name,imgSrc,rank,url})=> (
  <a href={url} target={'_blank'}>
    <VStack w={"52"} bgColor={'whiteAlpha.800'} shadow={"lg"} m={"4"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} 
    css={{ "&:hover":{transform:"scale(1.1)",},}}>

      <Image src={imgSrc} h={10} w={10}></Image>
      <Heading size={"md"} noOfLines={1}>{rank} </Heading>
      <Text size={"sm"} noOfLines={1}>{name}</Text>

    </VStack> 

  </a>

  



)




export default Exchange