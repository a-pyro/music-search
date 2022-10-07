import { useRef, FunctionComponent } from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

interface SearchProps {
  onSubmit: (query: string) => void
}

const Search: FunctionComponent<SearchProps> = ({ onSubmit }) => {
  const inputField = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const textInput = inputField.current?.value
    if (!textInput) return
    e.preventDefault()
    onSubmit(textInput)
  }
  return (
    <Navbar bg='light' className='rounded-pill px-3'>
      <Form
        onSubmit={handleSubmit}
        className='d-flex justify-content-between w-100'
      >
        <FormControl
          ref={inputField}
          autoFocus
          type='text'
          placeholder='type anything'
          className='mr-sm-2 rounded-pill'
        />
        <Button
          variant='outline-secondary'
          className='rounded-pill ms-3 d-block'
          type='submit'
        >
          🚀
        </Button>
      </Form>
    </Navbar>
  )
}

export default Search
