import { Box, Text, Image } from '@chakra-ui/react'

interface PropsCardIcon {
  icon: 'earth' | 'museum' | 'building' | 'cocktail' | 'surf'
  description: string
}

export const CardIcon = ({ icon, description }: PropsCardIcon) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      {icon === 'earth' &&
        <Image src='./assets/icons/earth.svg' alt={icon} />
      }
      {icon === 'museum' &&
        <Image src='./assets/icons/museum.svg' alt={icon} />
      }
      {icon === 'building' &&
        <Image src='./assets/icons/building.svg' alt={icon} />
      }
      {icon === 'cocktail' &&
        <Image src='./assets/icons/cocktail.svg' alt={icon} />
      }
      {icon === 'surf' &&
        <Image src='./assets/icons/surf.svg' alt={icon} />
      }
      <Text
        fontSize='1.5rem'
        fontWeight='600'
        color='headings_dark'
        mt='24px'
      >
        {description}
      </Text>
    </Box>
  )
}