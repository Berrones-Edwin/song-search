import { Center, Divider, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Loader from './components/Loader'
import SongDetails from './components/SongDetails'
import SongForm from './components/SongForm'
import useGetInfoSong from './hooks/useGetInfoSong'

const SongSearch = () => {
  const { loading, search, lyrics, bio, setSearch } = useGetInfoSong({})
  const handleSearch = (data) => {
    setSearch(data)
  }

  return (
    <>
      <Stack
        minH={'100vh'}
        display="flex"
        flex-direction={'column'}
        justifyContent={'flex-start'}
        align="center"
      >
        <Stack p={4} maxW={'70%'} minW={'70%'}>
          <Center>
            <Heading>Song Search</Heading>
          </Center>

          <SongForm handleSearch={handleSearch} />
          <Divider />
          {loading && <Loader />}
          {search && !loading && (
            <SongDetails search={search} lyrics={lyrics} bio={bio} />
          )}
        </Stack>
      </Stack>
    </>
  )
}

export default SongSearch
