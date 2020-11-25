import { extendTheme } from "@chakra-ui/core"

import styles from './styles'

import colors from './foundations/colors'
import breakpoints from './foundations/breakpoints'
import fonts from './foundations/typography'

import Button from './components/button'
import Heading from './components/heading'
import Text from './components/text'
import Link from './components/link'


const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
}

const overrides = {
  config,
  styles,
  colors,
  breakpoints,
  fonts,
  components: {
    Button,
    Heading,
    Text,
    Link,
  }
}

export default extendTheme(overrides)
