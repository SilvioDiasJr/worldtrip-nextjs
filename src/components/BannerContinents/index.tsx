import { Box, Flex, Heading } from '@chakra-ui/react'

export default function BannerContinents() {
  return (
      <Flex
        w='100%'
        h='500'
        bgImage={'../../assets/continent/europe.jpg'}
        bgSize='cover'
        bgPosition='center'
        position='relative'
      >
        <Box position="absolute" w="100%" h="100%" bg="rgba(0,0,0,0.4)" />
        <Flex
          w='100%'
          h='100%'
          maxWidth={1440}
          alignItems='flex-end'
          justifyContent='space-between'
          paddingY='76'
          paddingX='140'
        >
          <Heading
            position='absolute'
            fontSize='48'
            color='headings_light'
            fontWeight='600'
          >
            Europa
          </Heading>
        </Flex>
      </Flex>
  )
}