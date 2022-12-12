import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image
}
  from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoPokemon from "../../assets/logoPokemon.png"
import arrowIcon from "../../assets/arrowIcon.svg"
import { goToPokedexPage, goToPokemonsListPage } from '../../Router/coordinator'

const Header = () => {

  const navigate = useNavigate()
  return (
    <Grid
      w="100%" h={40}
      templateColumns='repeat(5, 1fr)'
      alignItems='center'
      justifyItems='center'
    >
      <GridItem>
        <Flex w='240px' >
          <Image src={arrowIcon} alt='Arrow Icon' />
          <Heading onClick={() => goToPokemonsListPage(navigate)}
            fontFamily="'Poppins', sans-serif"
            fontWeight="700"
            fontSize='24px'
            textDecoration='underline'
          >Todos Pokémons</Heading>
        </Flex>
      </GridItem>

      <GridItem colSpan={3}>
        <Image
          src={logoPokemon}
          alt="Logo Pokémon"
          w="307px"
          h="113px"
        />
      </GridItem>
      <GridItem >
        <Button onClick={() => goToPokedexPage(navigate)}
          colorScheme={'blue'}
          w="250px"
          h="74px"
          padding="4px 20px"
          fontFamily="'Poppins', sans-serif"
          fontWeight="700"
        >Pokédex</Button>
      </GridItem>
      {/* <GridItem >
        <Button
          colorScheme={'red'}
          w="250px"
          h="74px"
          padding="4px 20px"
          fontFamily="'Poppins', sans-serif"
          fontWeight="700"
        >Excluir da Pokédex</Button>
      </GridItem> */}
    </Grid>
  )
}

export default Header