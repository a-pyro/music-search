import { useState, useRef } from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

interface SearchProps {
  fetchApi: (query: string) => void
}

const Search = ({ fetchApi: onSubmit }: SearchProps) => {
  const [search, setsearch] = useState<string>('')
  const history = useHistory()

  const myRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(search)
    setsearch('')
    myRef.current?.focus()
  }
  return (
    <Navbar bg='light' expand='lg' className='rounded-pill px-3'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse
        id='basic-navbar-nav'
        className='justify-content-between'
      >
        <Nav>
          <h6 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
            🏡
          </h6>
        </Nav>
        <Form onSubmit={handleSubmit} className='d-flex'>
          <FormControl
            ref={myRef}
            autoFocus
            value={search}
            onChange={(e) => setsearch(e.currentTarget.value)}
            type='text'
            placeholder='Search'
            className='mr-sm-2 rounded-pill'
          />
          <Button
            variant='outline-success'
            className='rounded-pill ms-3'
            type='submit'
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Search
