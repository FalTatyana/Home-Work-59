import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Input from './components/input/Input'
import List from './components/movieList/List';
import ChuckNorrisJock from './components/chuckNorris/ChuckNorrisJock';
import ChuckNorrisButton from './components/chuckNorris/ChuckNorrisButton';

interface Movie {
  name: string
  id: number
}

function App() {
  const [list, setList] = useState<Movie[]>([
    { id: 1, name: 'My first love' },
    { id: 2, name: 'Gentelmans' },
    { id: 3, name: 'Good luck' },
    { id: 4, name: 'Avatar' }
  ]);

  const [jock, setJock] = useState('');

  const [value, setValue] = useState('');

  const addMovie = useCallback(() => {
    const trimmedValue = value.trim()

    const newMovie = {
      id: Date.now(),
      name: trimmedValue
    }

    if (trimmedValue.length !== 0) {
      setList([...list, newMovie]);
      setValue('');
    }
  }, [value]);

  const removeMovie = useCallback((id: number) => {
    const item = [...list].find(i => i.id === id)
    const filteredList = [...list].filter(i => i.id !== item.id);
    setList(filteredList)
  }, [])

  const editMovie = useCallback((id: number, value: string) => {
    setList(prev =>
      prev.map(movie =>
        movie.id === id
          ? { ...movie, name: value }
          : movie
      )
    )
  }, []);

  const getJock = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json()
    setJock(data.value)
  };

  return (
    <>
      <Input
        onClick={addMovie}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className='container w-75 mt-3 mb-5'>
        <h2 className='mb-3'>To watch list:</h2>
        {list.map(item => (
          <List
            onChange={editMovie}
            onRemove={removeMovie}
            key={item.id}
            content={item.name}
            id={item.id}
          />
        ))}
      </div>
      <div className='container w-75 mt-5'>
        <h2 className='mt-5'>This is the best jock Chuck Norris!</h2>
        <ChuckNorrisButton
          onClick={getJock}
        />
        <ChuckNorrisJock
          jock={jock}
        />
      </div>
    </>
  )
}

export default App
