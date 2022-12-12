import React from 'react'
import Header from '../../components/Header/Header'
import { Box, Grid, Heading } from '@chakra-ui/react'

const PokemonDetailPage = () => {
  return (
    <>
    <Header isInOnPokemonDetailsPage = {true}/>
    <Box w='100%' h={1000} bg={'gray.600'} padding="40px">
    <Heading 
    fontFamily="'Poppins', sans-serif"
    fontWeight="700"
    fontSize='32px'
    color={'white'}
    >
    Detalhes</Heading>
    <Grid>
      <div>PokemonDetailPage</div>
    </Grid>
    </Box>
    
    </>
  )
}

export default PokemonDetailPage