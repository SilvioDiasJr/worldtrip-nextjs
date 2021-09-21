import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    background: "#F5F8FA",
    headings_light: "#F5F8FA", 
    headings_dark: "#47585B",
    info_light: "#DADADA" 
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
