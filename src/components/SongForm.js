import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'

const initialState = {
  artist: '',
  song: ''
}
const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialState)
  const toast = useToast()

  const handleChangeInput = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.artist || !form.song) {
      toast({
        title: 'Error!!',
        description: 'The fields artist | song is required',
        status: 'error',
        duration: 2000,
        isClosable: true
      })
      return
    }
    handleSearch(form)
  }

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
        onSubmit={handleSubmit}
      >
        <FormControl>
          <FormLabel htmlFor="artist">Artist</FormLabel>
          <Input
            type={'text'}
            color={useColorModeValue('gray.800', 'gray.200')}
            name="artist"
            bg={useColorModeValue('gray.100', 'gray.600')}
            placeholder="Enter artist"
            value={form.artist}
            onChange={handleChangeInput}
            autoComplete="off"
            variant="filled"
            required
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none'
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="song">Song</FormLabel>
          <Input
            type={'text'}
            color={useColorModeValue('gray.800', 'gray.200')}
            name="song"
            bg={useColorModeValue('gray.100', 'gray.600')}
            placeholder="Enter song"
            value={form.song}
            onChange={handleChangeInput}
            autoComplete="off"
            variant="filled"
            required
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none'
            }}
          />
        </FormControl>

        <Button
          bg={'blue.400'}
          rounded={'full'}
          color={'white'}
          flex={'1 0 auto'}
          _hover={{ bg: 'blue.500' }}
          _focus={{ bg: 'blue.500' }}
          mt={3}
          size="lg"
          type="submit"
          colorScheme="blue"
        >
          Search
        </Button>
      </Stack>
    </>
  )
}

export default SongForm
