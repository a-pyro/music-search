import { Search } from '../types/deezer'
import { Image, ListGroup, Button } from 'react-bootstrap'
import AudioPlayer from 'components/AudioPlayer'
import { useRouteNavigation } from 'router'

interface TrackProps {
  track: Search
}

const SingleTrack = ({ track }: TrackProps) => {
  const goToRoute = useRouteNavigation()
  return (
    <ListGroup.Item className='d-flex align-items-center'>
      <Image
        roundedCircle
        alt='artistPic'
        style={{ height: '40px', width: '40px' }}
        src={track.artist.picture_medium}
      />{' '}
      <span className='mx-2'>👨🏻‍🎤</span>
      <span className='mx-2'>{track.artist.name} </span> <span>🎵</span>
      <span className='mx-2 text-truncate'>{track.title}</span>
      <div className='ms-auto d-flex align-items-center'>
        <AudioPlayer audioSource={track.preview} />
        <Button
          onClick={() => goToRoute(`/details/${track.id}`)}
          variant='info'
          className='mx-2 badge rounded-pill align-self-stretch'
        >
          Details
        </Button>
        <div>🕺</div>
      </div>
    </ListGroup.Item>
  )
}

export default SingleTrack
