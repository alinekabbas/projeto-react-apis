import { Button, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import pokeball from '../../assets/pngwing2.png'


const PokemonCard = (props) => {
  const {
    pokemon,
    isOnPokemonsListPage,
    isOnPokedexPage,
    addToPokedex,
    removePokedex
  } = props

  const [pokemonDetail, setPokemonDetail] = useState({})

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = () => {
    axios.get(pokemon.url)
      .then((response) => {
        console.log(response.data)
        setPokemonDetail(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Flex
      w='400px'
      h='210px'
      flexDirection='column'
      borderRadius='20px'
      position='relative'
      bg={'green.400'}>
      <Flex
        h='160px'
        justifyContent='space-between'>
        <VStack
          w='200px'
          alignItems='start'
          padding='16px'
          >
          <Text 
          color='white'
          fontSize='16px'
          fontFamily="Inter, sans serif"
          fontWeight='700'
          >#{pokemonDetail.id}</Text>
          <Heading
            fontFamily="Inter, sans serif"
            fontSize='32px'
            fontWeight='700'
            color='white'>
            {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
          </Heading>
          <HStack>
            {/* <Text>{pokemonDetail.types[0].type.name}</Text>
            <Text>{pokemonDetail.types[1].type.name}</Text> */}
          </HStack>
        </VStack>
        <VStack
          w='200px'
          alignItems='center'
          justifyContent='center'
          padding='16px'>
          <Image
            src={pokemonDetail.sprites?.other['official-artwork'].front_default}
            alt='Imagem Pokemon'
            w='190px'
            h='190px'
            position='absolute'
            zIndex={1}
            marginBottom="50px"
          />
          <Image
            src={pokeball}
            alt='Imagem Pokebola'
            position='absolute' 
            />

        </VStack>
      </Flex>
      <Flex
        w='400px'
        h='40px'
        justifyContent='space-between'
        alignItems='center'
        padding='0 24px'
        >
        <Text
          textDecoration='underline'
          fontFamily="'Poppins', sans-serif"
          fontWeight="700"
          fontSize='16px'
          color='white'
        >
          Detalhes
        </Text>

        {isOnPokemonsListPage &&
          <Button onClick={() => addToPokedex(pokemon)}
            w='146px'
            h='38px'
            fontFamily="'Poppins', sans-serif"
            fontWeight="400"
            fontSize='16px'
          >Capturar!</Button>}

        {isOnPokedexPage &&
          <Button onClick={()=> removePokedex(pokemon)}
            w='146px'
            h='38px'
            fontFamily="'Poppins', sans-serif"
            fontWeight="400"
            fontSize='16px'
          >Excluir</Button>}
      </Flex>
    </Flex>
  )
}

export default PokemonCard