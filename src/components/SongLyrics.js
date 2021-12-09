import { Stack, useColorModeValue,Heading,Text } from '@chakra-ui/react'
import React from 'react'

const SongLyrics = ({ title, lyrics }) => {
  return (
    <>
      <Stack
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'2xl'}
        minW={'300px'}
        as={'form'}
        p={10}
        spacing={8}
      >
        <Heading>{title}</Heading>
        <Text as='blockquote'> {lyrics} </Text>
      </Stack>
    </>
  )
}

export default SongLyrics
