import { Flex, Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import BannerContinents from '../components/BannerContinents'
import { CardCities } from '../components/CardCities'
import { Navbar } from '../components/Navbar'

export default function Continents() {
  return (
    <Flex w='100%' h='100%' flexDirection='column' alignItems='center' >
      <Navbar goBack />
      <BannerContinents />

      <Box
        h='100%'
        maxWidth={1440}
        alignItems='center'
        paddingY='76'
        paddingX='140'
      >

        <Flex w='100%' justifyContent='space-between' alignItems='center' mb='80px'>
          <Text fontSize='24' fontWeight='normal' color='headings_dark' textAlign='justify' flex='1'>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia,
            a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes
            Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>


          <Flex flex='1' fontFamily='heading' justifyContent='space-between' ml='70' >
            <Box textAlign='center'>
              <Heading
                fontSize='48'
                fontWeight='600'
                color='yellow_dark'
              >
                50
              </Heading>
              <Text
                fontSize='24'
                fontWeight='600'
                color='headings_dark'
              >
                países
              </Text>
            </Box>
            <Box textAlign='center'>
              <Heading
                fontSize='48'
                fontWeight='600'
                color='yellow_dark'
              >
                60
              </Heading>
              <Text
                fontSize='24'
                fontWeight='600'
                color='headings_dark'
              >
                línguas
              </Text>
            </Box>
            <Box textAlign='center'>
              <Heading
                fontSize='48'
                fontWeight='600'
                color='yellow_dark'
              >
                27
              </Heading>
              <Text
                fontSize='24'
                fontWeight='600'
                color='headings_dark'
              >
                cidades +100
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Box w='100%'>
          <Heading
            fontSize='36'
            fontWeight='500'
            color='headings_dark'
            mb='40px'
          >
            Cidades +100
          </Heading>
          <SimpleGrid w='100%' minChildWidth='215px' spacing={45} >
            <CardCities />
            <CardCities />
            <CardCities />
            <CardCities />
            <CardCities />
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  )
}