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
      <Header />
      <Box
        w='100%'
        h={1000}
        bg={'gray.600'}
        padding="40px 32px"
      >
        <Heading
          fontFamily="'Poppins', sans-serif"
          fontWeight="700"
          fontSize='32px'
          color={'white'}
        >
          Meus Pokémons
        </Heading>

        <Grid
          templateColumns='repeat(3, 1fr)'
          rowGap={10}
          columnGap={4}
          paddingTop='50px'
        >
          {pokedex.map((pokemon) => {
            return <PokemonCard
              key={pokemon.name}
              pokemonName={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
              pokemon={pokemon.name}
              removePokedex={removePokedex}
            />
          })}
        </Grid>
      </Box>
    </>
  )
}

export default PokedexPage