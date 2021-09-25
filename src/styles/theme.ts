import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    white: '#ffffff',
    yellow_dark: '#FFBA08',
    yellow_light: 'rgba(255, 186, 8, 0.5)',

    background: "#F5F8FA",
    headings_light: "#F5F8FA", 
    headings_dark: "#47585B",
    info_light: "#DADADA", 
    info_dark: "#999999"
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bg: "background"
      }
    }
  }
})
