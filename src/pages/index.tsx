import Head from 'next/head'
import { Flex, Text, Divider } from '@chakra-ui/react'

import Banner from '../components/Banner'
import { CardIcon } from '../components/CardIcon'
import { Navbar } from '../components/Navbar'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100%"
      mx="auto"
      align="center"
      direction="column"
    >
      <Head>
        <title>worldtrip | Home</title>
      </Head>

      <Navbar />

      <Banner />

      <Flex w='100%' paddingX='140' flexDirection='column' alignItems='center'>
        <Flex w='100%' h='300' maxWidth={1440} mx='auto' alignItems='center' justifyContent='space-between'>
          <CardIcon
            icon='cocktail'
            description='vida noturna'
          />
          <CardIcon
            icon='surf'
            description='praia'
          />
          <CardIcon
            icon='building'
            description='moderno'
          />
          <CardIcon
            icon='museum'
            description='clássico'
          />
          <CardIcon
            icon='earth'
            description='e mais...'
          />
        </Flex>

        <Divider w='90px' h='2px' bgColor='headings_dark' />

        <Flex
          h='205'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
        >
          <Text
            fontSize='2.25rem'
            fontWeight='500'
            textAlign='center'
            color='headings_dark'
          >
            Vamos nessa? <br/>
            Então escolha seu continente
          </Text>
        </Flex>

        <Slider />
      </Flex>
    </Flex>
  )
}

