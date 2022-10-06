import Title from 'components/Title'
import { useState, useCallback } from 'react'
import { Container, Jumbotron, Spinner } from 'react-bootstrap'
import { apiUrl, options } from '../api'
import Search from '../components/Search'
import TrackList from '../components/TackList'
import { Track } from '../types/deezer'

const Home = () => {
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(false)

  const fetchTrack = useCallback(async (query: string) => {
    try {
      setLoading(true)
      const resp = await fetch(`${apiUrl}/search?q=${query}`, options)
      const { data } = await resp.json()
      console.log(data)
      setTracks(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <Title content='Search Music' />
          <p>This is a very ugly app</p>
          <Search onSubmit={fetchTrack} />
        </Container>
      </Jumbotron>
      <Container>
        {(loading && <Spinner animation='grow' />) || (
          <TrackList tracks={tracks} />
        )}
      </Container>
    </>
  )
}

export default Home
