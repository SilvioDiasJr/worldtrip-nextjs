import { Flex, Heading, Text, Image } from '@chakra-ui/react'

export default function Banner() {
  return (
    <Flex
      as='header'
      w='100%'
      h='335'
      paddingX='140'
      bgImage='./assets/background-home.png'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Flex
        w='100%'
        maxWidth={1440}
        h='100%'
        mx="auto"
      >
        <Flex
          direction='column'
          paddingY='76'
          alignItems='flex-start'
          justifyContent='space-between'
          w='100%' h='100%'
        >
          <Heading fontSize='36' color='headings_light' fontWeight='500'>
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text fontSize='20' color='info_light' fontWeight='400'>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Flex
          w='100%'
          h='100%'
          pt='76'
          justifyContent='flex-end'
        >
          <Image
            src='./assets/Airplane.png'
            mb='-8'
            alt='Avião' />
        </Flex>
      </Flex>
    </Flex>
  )
}
