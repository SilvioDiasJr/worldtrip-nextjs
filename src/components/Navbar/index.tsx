import { Flex, Image } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Flex
      as='nav'
      w='100%'
      h='100'
      align='center'
      justify='center'
    >
      <Image src={'./assets/logo.png'} alt="Logo Worldtrip" />
    </Flex>
  )
}