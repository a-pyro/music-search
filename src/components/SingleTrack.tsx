import { Search } from '../types/deezer'
import { Image, ListGroup, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import AudioPlayer from './AudioPlayer'

interface TrackProps {
  track: Search
}

const SingleTrack = ({ track }: TrackProps) => {
  const history = useHistory()

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
      <span className='mx-2'>{track.title}</span>
      <div className='ms-auto'>
        <AudioPlayer audioSource={track.preview} />
        <Button
          onClick={() => history.push(`/details/${track.id}`)}
          variant='info'
          className='mx-2 badge rounded-pill'
        >
          Details
        </Button>
        <span>🕺</span>
      </div>
    </ListGroup.Item>
  )
}

export default SingleTrack
