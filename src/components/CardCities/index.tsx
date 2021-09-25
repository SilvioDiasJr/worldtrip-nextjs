import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react'

export const CardCities = () => {
  return (
    <Flex direction='column' w='256px' h='279' borderRadius='4'>
      <Image w='100%' h='173' src={'./assets/continent/reino-unido.png'} alt='' />

      <Flex
        flex='1' px='24px'
        justifyContent='space-between'
        alignItems='center'
        borderRadius='0 0 4px 4px'
        border='solid 1px'
        borderColor='yellow_light'
        borderTop='none'
        bgColor='white'
      >
        <Flex h='100%' direction='column' justifyContent='space-evenly'>
          <Heading
            fontSize='20'
            fontWeight='600'
            color='headings_dark'
          >
            Londres
          </Heading>
          <Text
            fontSize='16'
            fontWeight='500'
            color='info_dark'
          >
            Reino unido
          </Text>
        </Flex>

        <Image w='30' h='30' borderRadius='60%' src={'./assets/continent/flag-reino-unido.png'} alt='' />
      </Flex>

    </Flex>
  )
}