import type { Track } from '../types/deezer'
import SingleTrack from './SingleTrack'
import { Grid, GridItem } from '@chakra-ui/react'
interface TrackListProps {
  tracks: Track[]
}

const TackList = ({ tracks }: TrackListProps) => {
  return (
    <div>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem borderRadius='full' w='10' h='10' bg='blue.500' />
        <GridItem w='10' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
      {tracks?.map((track: Track) => (
        <SingleTrack key={track.id} track={track} />
      ))}
    </div>
  )
}

export default TackList
