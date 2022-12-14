import React, { useContext } from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react'
import Header from '../../components/Header/Header'
import { GlobalContext } from '../../contexts/GlobalStateContext'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const PokedexPage = () => {
  const context = useContext(GlobalContext)
  const { pokedex, removePokedex } = context


  return (
    <>
      <Header isOnPokedexPage={true} />
      <Box w='100%' h={1000} bg={'gray.600'} padding="40px">
        <Heading
          fontFamily="'Poppins', sans-serif"
          fontWeight="700"
          fontSize='32px'
          color={'white'}
        >
          Meus Pokémons</Heading>
        <Grid>
          {pokedex.map((pokemon)=>{
            return <PokemonCard 
            key={pokemon.name}
            removePokedex={removePokedex}
            />
          })}
        </Grid>
      </Box>
    </>
  )
}

export default PokedexPage