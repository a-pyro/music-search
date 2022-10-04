import { ListGroup } from 'react-bootstrap'
import type { Track } from '../types/deezer'
import SingleTrack from './SingleTrack'
interface TrackListProps {
  tracks: Track[]
}

const TackList = ({ tracks }: TrackListProps) => {
  return (
    <ListGroup>
      {tracks?.map((track: Track) => (
        <SingleTrack key={track.id} track={track} />
      ))}
    </ListGroup>
  )
}

export default TackList
