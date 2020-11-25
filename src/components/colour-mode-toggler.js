import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/core'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'

function ColourModeToggler() {
    const color = useColorModeValue("gray.800", "gray.100")
    const icon = useColorModeValue(<MoonIcon />, <SunIcon />)
    const { toggleColorMode } = useColorMode()

    return(
        <IconButton size="sm" mr={2} variant="ghost" onClick={toggleColorMode} color={color} icon={icon}/>
    )
}

export default ColourModeToggler