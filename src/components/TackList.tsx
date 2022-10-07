import type { Track } from '../types/deezer'
import SingleTrack from './SingleTrack'
interface TrackListProps {
  tracks: Track[]
}

const TackList = ({ tracks }: TrackListProps) => {
  return (
    <div>
      {tracks?.map((track: Track) => (
        <SingleTrack key={track.id} track={track} />
      ))}
    </div>
  )
}

export default TackList
