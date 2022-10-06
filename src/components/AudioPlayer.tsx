const AudioPlayer = ({
  audioSource,
  classNames,
}: {
  audioSource: string
  classNames?: string
}) => <audio className={classNames} controls src={audioSource}></audio>

export default AudioPlayer
