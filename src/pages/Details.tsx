import { useEffect, useState } from 'react'
import { Col, Container, Image, Row, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Track } from '../types/deezer'
import ReactAudioPlayer from 'react-audio-player'
import { options } from '../api'
import { secondsToMinutes } from 'date-fns'
type MusicParams = {
  id: string
}
const Details = () => {
  const [track, setTrack] = useState<Track>()
  const { id } = useParams<MusicParams>()

  useEffect(() => {
    ;(async () => {
      try {
        const resp = await fetch(
          `${process.env.REACT_APP_API_URL}/track/${id}`,
          options
        )
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
    <Container>
      <Row className='mt-5'>
        <Col className='text-center' md={8}>
          <Image
            rounded
            alt='albumCover'
            style={{ maxWidth: '500px' }}
            src={track?.album.cover_xl}
          />
        </Col>
        <Col md={4}>
          <ListGroup className='rounded'>
            <ListGroup.Item>Title: {track.title}</ListGroup.Item>
            <ListGroup.Item>
              Duration: {secondsToMinutes(track.duration)} min
            </ListGroup.Item>
            <ListGroup.Item>Artist: {track.artist.name}</ListGroup.Item>
          </ListGroup>
          <ReactAudioPlayer className='mt-3' src={track.preview} controls />
        </Col>
      </Row>
    </Container>
  )
}

export default Details
