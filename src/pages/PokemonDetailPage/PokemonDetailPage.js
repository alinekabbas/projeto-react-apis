import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { Box, Flex, Grid, Heading, HStack, VStack, Image, Progress, Text } from '@chakra-ui/react'
import axios from 'axios'
import pokeball from '../../assets/pngwing2.1.png'

const PokemonDetailPage = (props) => {
  // const {pokemon} = props

  const [pokemonDetail, setPokemonDetail] = useState({})

  // useEffect(() => {
  //   getPokemonDetails()
  // }, [])

  // const getPokemonDetails = async () => {
  //   try {
  //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  //     setPokemonDetail(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <Header />
      <Box w='100%' h={1000} bg={'gray.600'} padding="40px" position='relative'>
        <Heading
          fontFamily="'Poppins', sans-serif"
          fontWeight="700"
          fontSize='32px'
          color={'white'}
          paddingBottom='40px'
        >
          Detalhes
        </Heading>

        {/* <Image
          src={pokeball}
          alt='pokebola'
          position='absolute'
          w='1000px'
          h='1000px'
        //padding='16px 28px 0px 0px'
        /> */}

        <Flex
          w='1270px'
          h='663px'
          borderRadius='12px'
          bg={'green'}
          padding='25px 0px 25px 30px'
          justifyContent='space-between'
         
        >
          <Flex
            h='613px'
            w='300px'
            flexDirection='column'
            justifyContent='space-between'
          >
            <Image src={'https://picsum.photos/282'} alt='imagem pokémon' borderRadius='8px'/>
            <Image src={'https://picsum.photos/282'} alt='imagem pokémon' borderRadius='8px'/>
          </Flex>
          <Flex
            w='300px'
            h='613px'
            borderRadius='12px'
            bg={'white'}
            justifyContent='center'
          >
            <VStack
              w='280px'
              h='257px'
              flexDirection='column'
              fontSize='12px'
              fontFamily="Poppins, sans serif"
              padding='20px'
            >
              <Text
                fontWeight='700'
                fontSize='24px'
              >Base Stats
              </Text>
              <Grid
                w='300px'
                padding='10px'
                templateRows='repeat(7, 1fr)'
                templateColumns='1fr 1fr 3fr'
                alignItems='center'
              >
                <Text>HP</Text>
                <Text>45</Text>
                <Progress colorScheme={'orange'} value={45} />
                <Text>Total</Text>
                <Text>318</Text>
              </Grid>
              {/* <Text>{pokemonDetail.stats.stat.name} {pokemonDetail.stats.base_stat}<Progress colorScheme={'orange'} value={pokemonDetail.stats.base_stat} /></Text> */}
            </VStack>
          </Flex>
          <Flex >
            <Image
              src={pokeball}
              alt='pokebola'
              position='absolute'
              w='600px'
              h='663px'
              padding='0px 0px 24px 10px'
              
            />
            <Flex
              w='300px'
              h='613px'
              flexDirection='column'
              justifyContent='space-between'
              position='relative'
            >
              <Text>Id</Text>
              <Text>Nome Pokemon</Text>
              <HStack>
                <Text>Tipos</Text>
              </HStack>
              <VStack
                w='292px'
                h='453px'
                borderRadius='8px'
                bg={'white'}
              >
                <Text
                fontFamily="'Inter', sans-serif"
                fontWeight="800"
                fontSize='24px'
                >
                  Movies
                </Text>
                <Text
                h='37px'
                padding='8px'
                borderRadius='12px'
                border='1px dotted white'
                fontFamily="'Montserrat', sans-serif"
                fontWeight="400"
                fontSize='14px'
                bg='#ECECEC'
                >Movimentos</Text>
              </VStack>
            </Flex>
            <Flex
              w='300px'
              h='613px'>
              <Image
                src='https://picsum.photos/270'
                alt='imagem pokémon'
                w='270px'
                h='270px'
                zIndex={1}
                
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>

    </>
  )
}

export default PokemonDetailPage