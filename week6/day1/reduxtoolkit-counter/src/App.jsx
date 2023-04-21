import './App.css'
import Counter from './components/Counter/Counter'
import Episode from './components/Episode/Episode'
import { useDispatch } from 'react-redux'
import { addToList } from './components/Episode/episodeSlice'

function App() {
  const dispatch = useDispatch();
  const handleToAdd = () => {
    let data = {
      id: 9999,
      name: "Something 2",
      air_date: "December 100",
      characters: [],
      url: "https://rickandmortyapi.com/api/episode/1",
      created: "2017-11-10T12:56:33.798Z"
    }
    dispatch(addToList(data))
  }

  return (
    <>
      <Counter />
      <Episode />
      <button onClick={handleToAdd}>Add to List</button>
    </>
  )
}

export default App
