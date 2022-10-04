const AudioPlayer = ({ audioSource }: { audioSource: string }) => (
  <audio controls src={audioSource}></audio>
)

export default AudioPlayer
