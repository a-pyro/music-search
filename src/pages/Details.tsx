import { useEffect, useState } from 'react';
import { Col, Container, Image, Row, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ITrack } from '../types/deezer';
import ReactAudioPlayer from 'react-audio-player';
type MusicParams = {
  id: string;
};
const Details = () => {
  const [track, setTrack] = useState<ITrack | null>(null);
  const { id } = useParams<MusicParams>();

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `${process.env.REACT_APP_API_URL}/track/${id}`
        );
        const data = await resp.json();
        console.log(data);
        setTrack(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

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
            <ListGroup.Item>Title: {track?.title}</ListGroup.Item>
            <ListGroup.Item>
              Duration: {track?.duration && Math.round(track.duration / 60)} min
            </ListGroup.Item>
            <ListGroup.Item>Artist: {track?.artist.name}</ListGroup.Item>
          </ListGroup>
          <ReactAudioPlayer
            className='mt-3'
            src={track?.preview}
            autoPlay
            controls
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
