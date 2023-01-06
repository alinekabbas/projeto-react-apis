import {
  Box,
  Heading,
  Flex,
  HStack,
  Image,
  Grid,
  Progress,
  Text,
  VStack,
  GridItem,
}
  from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import { getTypes } from '../utils/ReturnPokemonType'
import { getColors } from '../utils/ReturnCardColor'
import { getStats } from '../utils/ReturnStats'
import pokeballBig from '../assets/pngwing2.1.png'
import axios from 'axios'

const PokemonDetailPage = () => {
  const [pokemonDetail, setpokemonDetail] = useState([])

  const { namePokemon } = useParams()

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`)
      setpokemonDetail(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  const moviePokemon = pokemonDetail?.moves?.slice(0, 4)
  const renderMoviePokemon = moviePokemon?.map((move) => {
    return <Flex
      h='37px'
      padding='8px'
      borderRadius='12px'
      border='1px dotted white'
      fontFamily="'Montserrat', sans-serif"
      fontWeight="400"
      fontSize='14px'
      bg='#ECECEC'
    >{move.move.name}
    </Flex>
  })

  return (
    <>
      <Header />
      <Box
        w='100%'
        h={1000}
        bg={'gray.600'}
        padding="40px 32px"
        position='relative'
      >
        <Heading
          fontFamily="'Poppins', sans-serif"
          fontWeight="700"
          fontSize='32px'
          color={'white'}
        >
          Detalhes
        </Heading>

        <Grid
          templateColumns='1 1fr'
          paddingTop='50px'
          justifyContent={'center'}
        >
          <Flex
            w='1270px'
            h='663px'
            borderRadius='12px'
            bg={pokemonDetail?.types?.map((type) => {
              if (type.slot === 1) {
                return getColors(type.type.name)
              }
            })}
            padding='25px 0px 25px 30px'
            justifyContent='space-between'

          >
            <Flex
              h='613px'
              w='300px'
              flexDirection='column'
              justifyContent='space-between'
            >
              <Image src={pokemonDetail?.sprites?.front_default} alt='imagem pokémon' borderRadius='8px' bg={'white'} />
              <Image src={pokemonDetail?.sprites?.back_default} alt='imagem pokémon' borderRadius='8px' bg={'white'} />
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
                <Flex
                  fontWeight='700'
                  fontSize='24px'
                  w='280px'
                  justifyContent='start'
                >Base Stats
                </Flex>
                <Grid
                  w='280px'
                  h='160px'
                  padding='10px'
                  templateColumns='1fr 0.5fr 2fr'
                  alignItems='center'
                >
                  <Text>
                    {pokemonDetail?.stats?.map((stat) => {
                      return <GridItem>{getStats(stat.stat.name)}</GridItem>
                    })}
                  </Text>
                  <Text>
                    {pokemonDetail?.stats?.map((stat) => {
                      return <GridItem>{stat.base_stat}</GridItem>
                    })}
                  </Text>
                  <Grid h='108px' alignItems='center'>
                    {pokemonDetail?.stats?.map((stat)=>{
                      return <Progress
                      colorScheme={stat.base_stat < 50? "orange" : "yellow"}
                      value={stat.base_stat}
                      borderRadius='4px'/>
                    })}
                  </Grid>
                  <Text>Total</Text>
                  {/* <Flex>
                  {
                    pokemonDetail?.stats?.map((stat) => {
                      let total = 0
                      return total += Number(stat.base_stat)
                    })
                  }</Flex> */}
                </Grid>
              </VStack>
            </Flex>
            <Flex >
              <Image
                src={pokeballBig}
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
                <Text
                  color='white'
                  fontSize='16px'
                  fontFamily="Inter, sans serif"
                  fontWeight='700'
                >
                  {pokemonDetail?.id <= 9 ? <Text>#0{pokemonDetail?.id}</Text> : <Text>#{pokemonDetail?.id}</Text>}
                </Text>
                <Text
                  fontFamily="Inter, sans serif"
                  fontSize='32px'
                  fontWeight='700'
                  color='white'
                >
                  {pokemonDetail?.name}
                </Text>
                <HStack>
                  {pokemonDetail?.types?.map((type) => {
                    return <Image key={type} src={getTypes(type.type.name)} alt='tipo pokémon' />
                  })
                  }
                </HStack>
                <VStack
                  w='292px'
                  h='453px'
                  borderRadius='8px'
                  bg={'white'}
                >
                  <Flex
                    w='250px'
                    paddingTop='16px'
                    fontFamily="'Inter', sans-serif"
                    fontWeight="800"
                    fontSize='24px'
                  >
                    Movies
                  </Flex>
                  <Flex
                    w='252px'
                    h='200px'
                    flexDirection='column'
                    justifyContent='space-between'
                    alignItems='flex-start'
                  >
                    {renderMoviePokemon}
                  </Flex>
                </VStack>
              </Flex>
              <Flex
                w='300px'
                h='613px'>
                <Image
                  src={pokemonDetail?.sprites?.other['official-artwork'].front_default}
                  alt='imagem pokémon'
                  w='270px'
                  h='270px'
                  zIndex={1}
                />
              </Flex>
            </Flex>
          </Flex>
        </Grid>
      </Box>

    </>
  )
}

export default PokemonDetailPage