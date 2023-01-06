import {
  Box,
  Grid,
  Heading
}
  from '@chakra-ui/react'
import React, { useContext } from 'react'
import Header from '../components/Header'
import { GlobalContext } from '../contexts/GlobalStateContext'

const PokedexPage = () => {
  const context = useContext(GlobalContext)
  const { renderPokedex } = context

  return (
    <>
      <Header />
      <Box
        w='100%'
        h={2000}
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
          {renderPokedex}
        </Grid>
      </Box>
    </>
  )
}

export default PokedexPage