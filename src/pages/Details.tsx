import { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ITrack } from '../types/deezer';

type MusicParams = {
  id: string;
};
const Details = () => {
  const { id } = useParams<MusicParams>();
  const [track, setTrack] = useState<ITrack>();

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
      <Row>
        <Col>
          <Image rounded alt='albumCover' src={track?.album.cover_xl} />
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
