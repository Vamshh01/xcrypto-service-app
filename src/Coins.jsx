
import React, { useEffect } from 'react'
import {server} from './main.jsx';
import {Container,HStack,VStack,Image,Heading,Text,Button,RadioGroup,Radio} from '@chakra-ui/react'
import { useState } from 'react';
import { SiTruenas } from 'react-icons/si';
import { TbRuler } from 'react-icons/tb';
import Loader from './Loader.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import CoinCard from './CoinCard.jsx';
import CoinDetails from './CoinDetails.jsx';


const Coins = () => {
  
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency , setCurrency] = useState("inr");

  const currencySymbol = currency=== "inr" ? "₹": currency ==="eur" ? "€" : "$";

 const changePage=(page)=>{
  
  setPage(page);
  setLoader(true);
      
 }

 const btns = new Array (132).fill(0);


  useEffect(()=>{

    const fetchAllData = async()=>{

     try{
      const response = await fetch(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      const data = await response.json();
      console.log(data);
      setCoins(data);
      setLoader(false);
     }
     catch(error){
        setError(true);
        setLoader(false);

     }

    }
    fetchAllData();

  },[currency, page])

  if(error) return(
    <ErrorComponent message = {"api couldn't be fetched properly try again later"}/>
  );



  return (

    <Container  maxW={"container.xl"}  justifyContent={"center"}>
      {loader?<Loader/>: (
        <>
        <RadioGroup m={"4"} value={currency} onChange={setCurrency} >
          <HStack spacing={"4"}>

            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>

           </HStack>
        </RadioGroup>
 
      <HStack wrap={"wrap"} justifyContent={"center"} >
     {coins.map((i)=> (
       
      <CoinCard name={i.name} imgSrc={i.image} rank={i.trust_score_rank} url={i.url} key={i.id} price={i.current_price} currencySymbol={currencySymbol} id={i.id}/>
      ))}
      </HStack>
      
      <HStack w={"full"} overflowX={"auto"} m={"6"} p={"8"}>

       {btns.map((item,index)=> 

       <Button bgColor={"blackAlpha.900"} color={"whiteAlpha.800"} variant={"unstyled"} onClick={()=>changePage(index+1)}>
       {index+1}
       </Button>

      )}


        </HStack>
      
      
      </>
      

      )}
      
     
    
      </Container>
  
  )
}




export default Coins;