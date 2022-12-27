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

  const getPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        //console.log(response.data.results)
        setPokemons(response.data.results)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    if (pokedex.length > 0){
      const pokedexString = JSON.stringify(pokedex)
      localStorage.setItem('pokedex', pokedexString)
    }
  }, [pokedex])

  useEffect(()=>{
    const getSavePokedex = JSON.parse(localStorage.getItem('pokedex'))
    if(getSavePokedex !== null){
      setPokedex(getSavePokedex)
    }
  }, [])

  const addToPokedex = (pokemonToAdd) => {
    const isOnPokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );
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


  const context = {
    pokemons: pokemons,
    setPokemons: setPokemons,
    pokedex: pokedex,
    setPokedex: setPokedex,
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
