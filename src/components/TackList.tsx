import type { Track } from '../types/deezer'
import SingleTrack from './SingleTrack'
import { Grid } from '@chakra-ui/react'
interface TrackListProps {
  tracks: Track[]
}

const TackList = ({ tracks }: TrackListProps) => {
  return (
    <Grid marginTop='8' templateColumns='repeat(4, 1fr)' gap={2}>
      {tracks?.map((track: Track) => (
        <SingleTrack key={track.id} track={track} />
      ))}
    </Grid>
  )
}

export default TackList
