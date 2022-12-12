import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import Header from '../../components/Header/Header'

const PokemonsListPage = () => {
  return (
    <>
    <Header/>
    <Box w='100%' h={1000} bg={'gray.600'} padding="40px">
    <Heading 
    fontFamily="'Poppins', sans-serif"
    fontWeight="700"
    fontSize='32px'
    color={'white'}
    >
    Todos Pokémons</Heading>
    <Grid>
      <div>Pokemons</div>
    </Grid>
    </Box>
    </>
  )
}

export default PokemonsListPage