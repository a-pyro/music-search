import { useEffect, useState } from 'react'
import { Box, Image, Text, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router'
import { Track } from '../types/deezer'
import { apiUrl, options } from '../api'
import { secondsToMinutes } from 'date-fns'
import AudioPlayer from 'components/AudioPlayer'

type MusicParams = {
  id: string
}
const Details = () => {
  const [track, setTrack] = useState<Track>()
  const { id } = useParams<MusicParams>()

  useEffect(() => {
    ;(async () => {
      try {
        const resp = await fetch(`${apiUrl}/track/${id}`, options)
        const data = await resp.json()
        console.log(data)
        setTrack(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [id])

  if (!track) return null

  return (
    <VStack w='100%'>
      <Box>
        <Image
          borderRadius={'md'}
          alt='albumCover'
          style={{ maxWidth: '100%' }}
          src={track?.album.cover_xl}
        />
        <VStack>
          <Text>Title: {track.title}</Text>
          <Text>Duration: {secondsToMinutes(track.duration)} min</Text>
          <Text>Artist: {track.artist.name}</Text>
          <AudioPlayer classNames='mt-3' audioSource={track.preview} />
        </VStack>
      </Box>
    </VStack>
  )
}

export default Details
