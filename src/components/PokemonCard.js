import {
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack
}
  from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import pokeball from '../assets/pngwing2.png'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { goToPokemonDetailPage } from '../Router/coordinator'
import { getTypes } from '../utils/ReturnPokemonType'
import { getColors } from '../utils/ReturnCardColor'

const PokemonCard = (props) => {
  const {
    pokemon,
    pokemonName,
    addToPokedex,
    removePokedex,
  } = props

  const [pokemonCards, setPokemonCards] = useState({})

  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {
    getPokemonCards()
  }, [])

  const getPokemonCards = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      setPokemonCards(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {(location.pathname === '/' || location.pathname === '/pokedex') &&
        <Flex
          w='420px'
          h='210px'
          flexDirection='column'
          borderRadius='20px'
          position='relative'
          bg={pokemonCards?.types?.map((type) => {
            if (type.slot === 1) {
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
              >{pokemonCards?.id <=9 ? <Text>#0{pokemonCards?.id}</Text>: <Text>#{pokemonCards?.id}</Text>}
              </Text>
              <Text
                fontFamily="Inter, sans serif"
                fontSize='32px'
                fontWeight='700'
                color='white'>
                {pokemonName}
              </Text>
              <HStack>
                {pokemonCards?.types?.map((type) => {
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
                src={pokemonCards.sprites?.other['official-artwork'].front_default}
                alt='Imagem Pokemon'
                w='200px'
                h='200px'
                position='absolute'
                zIndex={1}
                marginBottom="50px"
              />
              <Image
                src={pokeball}
                alt='Imagem Pokebola'
                position='absolute'
                w='250px'
                padding='16px 28px 0px 0px '
              />

            </VStack>
          </Flex>
          <Flex
            w='420px'
            h='40px'
            justifyContent='space-between'
            alignItems='center'
            padding='0 24px'
          >
            <Text onClick={() => {
              goToPokemonDetailPage(navigate, pokemonCards.name)
            }}
              textDecoration='underline'
              fontFamily="'Poppins', sans-serif"
              fontWeight="700"
              fontSize='16px'
              color='white'
              cursor={'pointer'}
            >
              Detalhes
            </Text>

            {location.pathname === '/' &&
              <Button onClick={() => {
                addToPokedex(pokemonCards)
                onOpen()
              }}
                w='146px'
                h='38px'
                fontFamily="'Poppins', sans-serif"
                fontWeight="400"
                fontSize='16px'
                cursor={'pointer'}
              >Capturar!</Button>}

            {location.pathname === '/pokedex' &&
              <Button
                onClick={() => {
                  onOpen()
                  removePokedex(pokemonCards)
                }}
                w='146px'
                h='38px'
                fontFamily="'Poppins', sans-serif"
                fontWeight="400"
                fontSize='16px'
                colorScheme='red'
                cursor={'pointer'}
              >Excluir </Button>}

            {location.pathname === '/' &&
              <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent
                  w='451px'
                  h='222px'
                  borderRadius='12px'
                  alignItems={'center'}
                >
                  <ModalBody
                    w='400px'
                    h='96px'
                    padding='70px 8px'
                    borderRadius='12px'
                    bg={'white'}
                    fontFamily="'Poppins', sans-serif"
                    fontWeight="700"
                    textAlign={'center'}
                  >
                    <Text
                      fontSize='32px'
                    >
                      Gotcha!
                    </Text>
                    <Text
                      fontSize='16px'
                    >
                      O Pokémon foi adicionado a sua Pokédex
                    </Text>
                  </ModalBody>
                </ModalContent>
              </Modal>
            }

            {location.pathname === '/pokedex' &&
              <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent
                  w='451px'
                  h='222px'
                  borderRadius='12px'
                  alignItems={'center'}
                >
                  <ModalBody
                    w='400px'
                    h='96px'
                    padding='70px 8px'
                    borderRadius='12px'
                    bg={'white'}
                    fontFamily="'Poppins', sans-serif"
                    fontWeight="700"
                    textAlign={'center'}
                  >
                    <Text
                      fontSize='32px'
                    >
                      Oh, no!
                    </Text>
                    <Text
                      fontSize='16px'
                    >
                      O Pokémon foi removido da sua Pokédex
                    </Text>
                  </ModalBody>
                </ModalContent>
              </Modal>
            }
          </Flex>
        </Flex>
      }


      {/* {location.pathname === `/pokemon/detalhes/${namePokemon}` &&
        <Flex
          w='1270px'
          h='663px'
          borderRadius='12px'
          bg={pokemonCards?.types?.map((type) => {
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
            <Image src={pokemonCards?.sprites?.front_default} alt='imagem pokémon' borderRadius='8px' bg={'white'} />
            <Image src={pokemonCards?.sprites?.back_default} alt='imagem pokémon' borderRadius='8px' bg={'white'} />
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
                w='300px'
                padding='10px'
                templateColumns='1fr 0.5fr 2fr'
                alignItems='center'
              >
                <Text>
                  {pokemonCards?.stats?.map((stat) => {
                    return <GridItem>{getStats(stat.stat.name)}</GridItem>
                  })}
                </Text>
                <Text>
                  {pokemonCards?.stats?.map((stat) => {
                    return <GridItem>{stat.base_stat}</GridItem>
                  })}
                </Text>
                <Progress
                  colorScheme={pokemonCards?.stats?.map((stat) => {
                    return <GridItem>{getStatsColor(stat.stat.name)}</GridItem>
                  })}
                  value={
                    pokemonCards?.stats?.map((stat) => {
                      return stat.base_stat
                    })
                  }
                  borderRadius='4px' />
                <Text>Total</Text>
                <Text>
                  {
                    pokemonCards?.stats?.map((stat) => {
                      let total = 0
                      return total += stat.base_stat
                    })
                  }</Text>
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
                #{pokemonCards.id}
              </Text>
              <Text
                fontFamily="Inter, sans serif"
                fontSize='32px'
                fontWeight='700'
                color='white'
              >
                {pokemonName}
              </Text>
              <HStack>
                {pokemonCards?.types?.map((type) => {
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
                src={pokemonCards?.sprites?.other['official-artwork'].front_default}
                alt='imagem pokémon'
                w='270px'
                h='270px'
                zIndex={1}
              />
            </Flex>
          </Flex>
        </Flex>
      } */}
    </>
  )
}

export default PokemonCard