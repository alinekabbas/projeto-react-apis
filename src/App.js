import React, { useEffect, useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./GlobalStyle";
import Router from "./Router/Router";
import { GlobalContext } from './contexts/GlobalStateContext'
import axios from 'axios'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((response) => {
        //console.log(response.data.results)
        setPokemons(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const addToPokedex = (pokemonToAdd) => {
    const isOnPokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    )
    if (!isOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd]
      setPokedex(newPokedex)
    }
  }

  const removePokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter((pokemon) => pokemon.name !== pokemonToRemove.name)
    setPokedex(newPokedex)
  }

  const context = {
    pokemons: pokemons,
    pokedex: pokedex,
    addToPokedex: addToPokedex,
    removePokedex: removePokedex
  }

  return (

    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
      <GlobalStyle />
    </GlobalContext.Provider>


  );
}

export default App;
