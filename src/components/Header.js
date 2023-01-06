import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
}
  from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import logoPokemon from "../assets/logoPokemon.png"
import arrowIcon from "../assets/arrowIcon.svg"
import { goToPokedexPage, goToPokemonsListPage } from '../Router/coordinator'
import { GlobalContext } from '../contexts/GlobalStateContext'

const Header = (props) => {
  const { pokemonDetail } = props

  const context = useContext(GlobalContext)
  const { pokedex, addToPokedex, removePokedex, activeModal, setActiveModal } = context

  const navigate = useNavigate()

  const location = useLocation()

  const { namePokemon } = useParams()

  const { onOpen, isOpen, onClose } = useDisclosure()

  function renderButton() {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonDetail.name
    )
    if (!isAlreadyOnPokedex) {
      return (<Button
        onClick={() => {
          setActiveModal(1)
          addToPokedex(pokemonDetail)
          onOpen(true)
        }}
        colorScheme={'blue'}
        w="250px"
        h="74px"
        padding="4px 20px"
        fontFamily="'Poppins', sans-serif"
        fontWeight="400"
        fontSize='12px'
        cursor={'pointer'}
      >Adicionar a Pokédex</Button>
      )
    } else {
      return (<Button
        onClick={() => {
          setActiveModal(2)
          removePokedex(pokemonDetail)
          onOpen(true)
        }}
        colorScheme={'red'}
        w="250px"
        h="74px"
        padding="4px 20px"
        fontFamily="'Poppins', sans-serif"
        fontWeight="400"
        fontSize='12px'
        cursor={'pointer'}
      >Excluir da Pokédex</Button>)
    }
  }

  const renderModalTypes = () => {
    if (activeModal === 1) {
      return <>
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
      </>
    } else {
      return <>
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
      </>
    }
  }

  return (
    <>
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
            {renderModalTypes()}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Grid
        w="100%" h={40}
        templateColumns='repeat(8, 1fr)'
        templateRows='repeat(3, 1fr)'
        alignItems='center'
        justifyItems='center'
      >
        {location.pathname === '/pokedex' &&
          <GridItem gridColumn={'1/3'} gridRow={'2/3'}>
            <Flex w='240px' >
              <Image src={arrowIcon} alt='Arrow Icon' />
              <Heading onClick={() => goToPokemonsListPage(navigate)}
                fontFamily="'Poppins', sans-serif"
                fontWeight="700"
                fontSize='24px'
                textDecoration='underline'
                cursor={'pointer'}
              >Todos Pokémons</Heading>
            </Flex>
          </GridItem>}

        {location.pathname === `/pokemon/detalhes/${namePokemon}` &&
          <GridItem gridColumn={'1/3'} gridRow={'2/3'}>
            <Flex w='240px' >
              <Image src={arrowIcon} alt='Arrow Icon' />
              <Heading onClick={() => goToPokemonsListPage(navigate)}
                fontFamily="'Poppins', sans-serif"
                fontWeight="700"
                fontSize='24px'
                textDecoration='underline'
                cursor={'pointer'}
              >Todos Pokémons</Heading>
            </Flex>
          </GridItem>}

        <GridItem gridColumn={'4 / 6'} gridRow={'2/3'}>
          <Image
            src={logoPokemon}
            alt="Logo Pokémon"
            w="307px"
            h="113px"
          />
        </GridItem>

        {location.pathname === '/' &&
          <GridItem gridColumn={'7 / 9'} gridRow={'2/3'}>
            <Button onClick={() => goToPokedexPage(navigate)}
              colorScheme={'blue'}
              w="250px"
              h="74px"
              padding="4px 20px"
              fontFamily="'Poppins', sans-serif"
              fontWeight="700"
              fontSize='24px'
              cursor={'pointer'}
            >Pokédex</Button>
          </GridItem>}

        {location.pathname === `/pokemon/detalhes/${namePokemon}` &&
          <GridItem gridColumn={'7 / 9'} gridRow={'2/3'}>
            {renderButton(pokemonDetail)}
          </GridItem>}
      </Grid>
    </>
  )
}

export default Header