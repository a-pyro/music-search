import { useRef, FunctionComponent } from 'react'
import { Input } from '@chakra-ui/react'
interface SearchProps {
  onChange: (query: string) => void
}

const Search: FunctionComponent<SearchProps> = ({ onChange }) => {
  const inputField = useRef<HTMLInputElement>(null)
  const handleChange = () => {
    const textInput = inputField.current?.value
    if (!textInput) return
    onChange(textInput)
  }
  return (
    <Input
      placeholder='Type to search'
      ref={inputField}
      onChange={handleChange}
    />
  )
}

export default Search
