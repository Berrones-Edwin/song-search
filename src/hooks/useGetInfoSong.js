import { useEffect, useState } from 'react'
import { HelperHTTP } from '../helpers/HelperHTTP'

const URL_API_INFO_SONG = 'https://www.theaudiodb.com/api/v1/json/2/search.php'
const URL_API_LYRYCS = 'https://api.lyrics.ovh/v1/'
const useGetInfoSong = () => {
  const [search, setSearch] = useState(null)
  const [lyrics, setLyrics] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search === null) return
    const { song, artist } = search
    let urlBio = `${URL_API_INFO_SONG}?s=${encodeURI(artist)}`

    let urlSong = `${URL_API_LYRYCS}${encodeURI(artist)}/${encodeURI(song)}`

    const fetchData = async () => {
      setLoading(true)

      const [artistResponse, songResponse] = await Promise.all([
        HelperHTTP().get(urlBio),
        HelperHTTP().get(urlSong)
      ])
      setBio(artistResponse)
      setLyrics(songResponse)
      setLoading(false)
    }

    fetchData()
  }, [search])

  return {
    search,
    lyrics,
    bio,
    loading,
    setSearch
  }
}

export default useGetInfoSong
