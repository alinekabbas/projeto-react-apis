import React, { useEffect, useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./GlobalStyle";
import Router from "./Router/Router";
import { GlobalContext } from './contexts/GlobalStateContext'
import axios from 'axios'
import PokemonCard from './components/PokemonCard';

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [activeModal, setActiveModal] = useState(1)

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      setPokemons(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (pokedex.length > 0) {
      const pokedexString = JSON.stringify(pokedex)
      localStorage.setItem('pokedex', pokedexString)
    }
  }, [pokedex])

  useEffect(() => {
    const getSavePokedex = JSON.parse(localStorage.getItem('pokedex'))
    if (getSavePokedex !== null) {
      setPokedex(getSavePokedex)
    }
  }, [])

  const addToPokedex = (pokemonToAdd) => {
    const isOnPokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name);
    if (!isOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd]
      setPokedex(newPokedex)
    }
  }

  const removePokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name)
    window.localStorage.removeItem('pokedex')
    setPokedex(newPokedex)
  }

  const renderPokemonList = pokemons.map((pokemon) => {
    return <PokemonCard
      key={pokemon.url}
      pokemonName={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
      pokemon={pokemon.name}
      addToPokedex={addToPokedex} />
  })

  const renderPokedex = pokedex.map((pokemon) => {
    return <PokemonCard
      key={pokemon.name}
      pokemonName={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
      pokemon={pokemon.name}
      removePokedex={removePokedex}
    />
  })

  const context = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    addToPokedex,
    removePokedex,
    renderPokemonList,
    renderPokedex,
    activeModal,
    setActiveModal
  }

  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
      <GlobalStyle />
    </GlobalContext.Provider>
  )
}
export default App;
