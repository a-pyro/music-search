import { useState } from 'react';
import { Container, Jumbotron, Spinner } from 'react-bootstrap';
import Search from '../components/Search';
import TrackList from '../components/TackList';
import { ISearch } from '../types/deezer';

const Home = () => {
  const [tracks, setTracks] = useState<ISearch[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = async (query: string) => {
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
          <h1>Search Music - Deezer Api</h1>
          <p>This is a very ugly app</p>
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
