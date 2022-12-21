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
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoPokemon from "../../assets/logoPokemon.png"
import arrowIcon from "../../assets/arrowIcon.svg"
import { goToPokedexPage, goToPokemonsListPage } from '../../Router/coordinator'

const Header = () => {
  const navigate = useNavigate()

  const location = useLocation()

  return (
    <Grid
      w="100%" h={40}
      templateColumns='repeat(4, 1fr)'
      templateRows='repeat(3, 1fr)'
      alignItems='center'
      justifyItems='center'
    >
      {location.pathname === '/pokedex' &&
        <GridItem gridColumn={'1/2'} gridRow={'2/3'}>
          <Flex w='240px' >
            <Image src={arrowIcon} alt='Arrow Icon' />
            <Heading onClick={() => goToPokemonsListPage(navigate)}
              fontFamily="'Poppins', sans-serif"
              fontWeight="700"
              fontSize='24px'
              textDecoration='underline'
            >Todos Pokémons</Heading>
          </Flex>
        </GridItem>}

      {location.pathname === '/pokedex/id' &&
        <GridItem gridRow={'2/3'}>
          <Flex w='240px' >
            <Image src={arrowIcon} alt='Arrow Icon' />
            <Heading onClick={() => goToPokemonsListPage(navigate)}
              fontFamily="'Poppins', sans-serif"
              fontWeight="700"
              fontSize='24px'
              textDecoration='underline'
            >Todos Pokémons</Heading>
          </Flex>
        </GridItem>}

      <GridItem gridColumn={'2 / 4'} gridRow={'2/3'}>
        <Image
          src={logoPokemon}
          alt="Logo Pokémon"
          w="307px"
          h="113px"
        />
      </GridItem>

      {location.pathname === '/' &&
        <GridItem gridColumn={'4 / 5'} gridRow={'2/3'}>
          <Button onClick={() => goToPokedexPage(navigate)}
            colorScheme={'blue'}
            w="250px"
            h="74px"
            padding="4px 20px"
            fontFamily="'Poppins', sans-serif"
            fontWeight="700"
            fontSize='24px'
          >Pokédex</Button>
        </GridItem>}

      {location.pathname === '/pokedex/id' &&
        <GridItem gridColumn={'4 / 5'} gridRow={'2/3'}>
          <Button
            colorScheme={'red'}
            w="250px"
            h="74px"
            padding="4px 20px"
            fontFamily="'Poppins', sans-serif"
            fontWeight="400"
            fontSize='16px'
          >Excluir da Pokédex</Button>
        </GridItem>}
    </Grid>
  )
}

export default Header