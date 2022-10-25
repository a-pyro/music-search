import { Search } from '../types/deezer'
import { useRouteNavigation } from 'router'
import { Image, Box, Text, GridItem } from '@chakra-ui/react'

interface TrackProps {
  track: Search
}

const SingleTrack = ({ track }: TrackProps) => {
  const goToRoute = useRouteNavigation()

  return (
    <GridItem cursor='pointer' textAlign='center'>
      <Box textAlign={'center'}>
        <Image
          borderRadius='full'
          loading='lazy'
          alt='artistPic'
          src={track.artist.picture_medium}
          mb={2}
        />
      </Box>
      <Box>
        <Text fontSize='xs'>{track.artist.name}</Text>
        <Text
          fontSize='xs'
          noOfLines={1}
          textDecoration='underline'
          onClick={() => goToRoute(`/details/${track.id}`)}
        >
          {track.title}
        </Text>
      </Box>
    </GridItem>
  )
}

export default SingleTrack
