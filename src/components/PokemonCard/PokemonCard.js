import {
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  Text,
  useDisclosure,
  VStack
}
  from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import pokeball from '../../assets/pngwing2.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToPokemonDetailPage } from '../../Router/coordinator'
import { getTypes } from '../../utils/ReturnPokemonType'
import { getColors } from '../../utils/ReturnCardColor'


const PokemonCard = (props) => {
  const {
    pokemonUrl,
    addToPokedex,
    removePokedex
  } = props

  const [pokemonDetail, setPokemonDetail] = useState({})

  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = () => {
    axios.get(pokemonUrl)
      .then((response) => {
        //console.log(response.data)
        setPokemonDetail(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // const usageModal = ()=>{
  //   const {isOpen, onOpen, onClose} = useDisclosure()
  // }
 
  return (
    <Flex
      w='400px'
      h='210px'
      flexDirection='column'
      borderRadius='20px'
      position='relative'
      bg={pokemonDetail?.types?.map((type) => {
        if(type.slot === 1){
          return getColors(type.type.name)
        }
      })}
      >
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
          <Text
            fontFamily="Inter, sans serif"
            fontSize='32px'
            fontWeight='700'
            color='white'>
            {pokemonDetail.name}
          </Text>
          <HStack>
            {pokemonDetail?.types?.filter((type) => {
              return(type)
            }).map((type)=>{
              return <Image key={type} src={getTypes(type.type.name)} alt='tipo pokémon' />
            })
            }
          </HStack>
        </VStack>
        <VStack
          w='200px'
          alignItems='center'
          justifyContent='center'
          padding='16px'
        >
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
            w={'48'}
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
        <Text onClick={() => goToPokemonDetailPage(navigate)}
          textDecoration='underline'
          fontFamily="'Poppins', sans-serif"
          fontWeight="700"
          fontSize='16px'
          color='white'
        >
          Detalhes
        </Text>

        {location.pathname === '/' &&
          <Button onClick={() => addToPokedex(pokemonDetail)}
            w='146px'
            h='38px'
            fontFamily="'Poppins', sans-serif"
            fontWeight="400"
            fontSize='16px'
          >Capturar!</Button>}

        {/* <Modal>
          <ModalBody>
            <Text>Gotcha!</Text>
            <Text>O Pokémon foi adicionado a sua Pokédex</Text>
          </ModalBody>
        </Modal> */}

        {location.pathname === '/pokedex' &&
          <Button onClick={() => removePokedex(pokemonDetail)}
            w='146px'
            h='38px'
            fontFamily="'Poppins', sans-serif"
            fontWeight="400"
            fontSize='16px'
            colorScheme='red'
          >Excluir</Button>}
      </Flex>
    </Flex>
  )
}

export default PokemonCard