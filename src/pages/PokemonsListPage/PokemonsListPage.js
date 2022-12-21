import { Box, Grid, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalStateContext'


const PokemonsListPage = () => {
  const context = useContext(GlobalContext)
  const { pokemons, addToPokedex } = context

  return (
    <>
      <Header/>
      <Box
        w='100%'
        h='100%'
        bg={'gray.600'}
        padding="40px 32px">
        <Heading
          fontFamily="'Poppins', sans-serif"
          fontWeight="700"
          fontSize='32px'
          color={'white'}
        >
          Todos Pokémons</Heading>

        <Grid
          templateColumns='repeat(3, 1fr)'
          rowGap={10}
          columnGap={4}
          paddingTop='50px'>
          {pokemons.map((pokemon) => {
            return <PokemonCard
              isOnPokemonsListPage={true}
              key={pokemon.name}
              pokemonName={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
              pokemonUrl={pokemon.url}
              addToPokedex={addToPokedex} />
          })}
        </Grid>
      </Box>
    </>
  )
}

export default PokemonsListPage