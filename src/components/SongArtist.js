import { Image } from '@chakra-ui/image'
import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const SongArtist = ({ artist }) => {
  return (
    <>
      <Stack>
        <Image src={artist.strArtistWideThumb} alt={artist.strArtist} />
        <Stack p={6}>
          <Heading>{artist.strArtist}</Heading>

          <Text>
            {artist.intBornYear} - {artist.intDiedYear || 'Presente'}
          </Text>
          <Text>
            <b> Country</b> {artist.strCountry}
          </Text>
          <Text>
              <b>Genre</b> {artist.strGenre} - {artist.strStyle}
          </Text>
          <Button
          as='a'
            href={`http://${artist.strWebsite}`}
            target="_blank"
            rel="noreferrer"
          >
            Site Web Oficial
          </Button>
          <Text>{artist.strBiographyEN}</Text>
        </Stack>
      </Stack>
    </>
  )
}

export default SongArtist
