import { useState } from 'react';
import { Container, Jumbotron, Spinner } from 'react-bootstrap';
import Search from '../components/Search';
import TrackList from '../components/TackList';
import { ISearch } from '../types/deezer';

const Home = () => {
  const [tracks, setTracks] = useState<ISearch[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchApi: Function = async (query: string) => {
    try {
      setLoading(true);
      const resp = await fetch(
        `${process.env.REACT_APP_API_URL}/search?q=${query}`
      );
      const { data } = await resp.json();
      console.log(data);
      setTracks(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          <Search fetchApi={fetchApi} />
        </Container>
      </Jumbotron>
      <Container>
        {(loading && <Spinner animation='grow' />) || (
          <TrackList tracks={tracks} />
        )}
      </Container>
    </>
  );
};

export default Home;
