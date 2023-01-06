import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import PokedexPage from '../pages/PokedexPage'
import PokemonDetailPage from '../pages/PokemonDetailPage'
import PokemonsListPage from '../pages/PokemonsListPage'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<PokemonsListPage/>} />
            <Route path='/pokedex' element={<PokedexPage/>} />
            <Route path='/pokemon/detalhes/:namePokemon' element={<PokemonDetailPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router