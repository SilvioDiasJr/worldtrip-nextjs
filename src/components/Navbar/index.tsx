import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

interface Props {
  goBack?: boolean
}

export const Navbar: React.FC<Props> = ({ goBack }) => {
  return (
    <Flex
      as='nav'
      w='100%'
      h='100'
      align='center'
      justify='center'
    >
      <Flex
        align='center'
        justify='center'
        maxWidth={1440}
        paddingX='140'
      >
        {goBack &&
          <Link href='/' passHref>
            <ChakraLink position='absolute' left='140'>
              <Image src={'./assets/icons/arrow-left.svg'} alt='Icone de flecha' />
            </ChakraLink>
          </Link>
        }
        <Image src={'./assets/logo.png'} alt="Logo Worldtrip" />
      </Flex>
    </Flex>
  )
}