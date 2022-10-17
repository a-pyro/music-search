import { Search } from '../types/deezer'
import { useRouteNavigation } from 'router'
import { Flex, Image, Button, Box, Text, Spacer } from '@chakra-ui/react'

interface TrackProps {
  track: Search
}

const SingleTrack = ({ track }: TrackProps) => {
  const goToRoute = useRouteNavigation()

  return (
    <>
      <Flex marginY={4} alignItems='center'>
        <Box textAlign={'center'}>
          <Image
            borderRadius='full'
            loading='lazy'
            alt='artistPic'
            boxSize='200px'
            src={track.artist.picture_medium}
            mb={2}
          />
          <Text>{track.artist.name}</Text>
        </Box>

        <Spacer />
        <Text>{track.title}</Text>
        <Box>
          <Button
            variant='ghost'
            colorScheme='teal'
            onClick={() => goToRoute(`/details/${track.id}`)}
          >
            Details
          </Button>
        </Box>
      </Flex>
      <hr />
    </>
  )
}

export default SingleTrack
