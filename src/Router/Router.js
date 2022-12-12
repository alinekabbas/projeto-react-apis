import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import PokemonDetailPage from '../pages/PokemonDetailPage/PokemonDetailPage'
import PokemonsListPage from '../pages/PokemonsListPage/PokemonsListPage'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<PokemonsListPage/>} />
            <Route path='/pokedex' element={<PokedexPage/>} />
            <Route path='/pokedex/detalhes' element={<PokemonDetailPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router