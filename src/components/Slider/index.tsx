import { Image, Box, Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper';

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      speed={1000}
      centeredSlides
      navigation
      pagination={{ clickable: true }}
      style={{ width: '100%', height: '450px', marginBottom: '40px' }}
    >
      <SwiperSlide>
        <Box position="absolute" w="100%" h="100%" bg="rgba(0,0,0,0.5)" />
        <Flex
          w='100%'
          h='100%'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          bgImage='./assets/continent/oceania.jpg'
          bgRepeat='no-repeat'
          bgPosition='center'
          bgSize='cover'
        >
          <Link href='/' passHref>
            <ChakraLink
              position='absolute'
              textAlign='center'
              textDecoration='none'
              color='headings_light'
              _hover={{ color: 'red' }}
            >
              <Box>
                <Heading
                  fontSize='48'
                  fontWeight='bold'
                >
                  América
                </Heading>
                <Text
                brig
                  fontSize='24'
                  fontWeight='bold'
                >
                  O melhor continente
                </Text>
              </Box>
            </ChakraLink>
          </Link>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Box position="absolute" w="100%" h="100%" bg="rgba(0,0,0,0.5)" />
        <Flex
          w='100%'
          h='100%'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          bgImage='./assets/continent/oceania.jpg'
          bgRepeat='no-repeat'
          bgPosition='center'
          bgSize='cover'
        >
          <Link href='/' passHref>
            <ChakraLink
              position='absolute'
              textAlign='center'
              textDecoration='none'
              color='headings_light'
              _hover={{ color: 'red' }}
            >
              <Box>
                <Heading
                  fontSize='48'
                  fontWeight='bold'
                >
                  América
                </Heading>
                <Text
                brig
                  fontSize='24'
                  fontWeight='bold'
                >
                  O melhor continente
                </Text>
              </Box>
            </ChakraLink>
          </Link>
        </Flex>
      </SwiperSlide>
    </Swiper>
  )
}