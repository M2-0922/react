import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from './actions/weatherAction';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Search from './components/Search/Search';
import PrevCitites from './components/PrevCitites/PrevCitites';

function App() {
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState(true);
  const weather = useSelector(state => state.weather);
  const isLoading = useSelector(state => state.isLoading);
  useEffect(() => {
    dispatch(fetchWeather("Vancouver"))
  }, [dispatch])

  return (
    <div>
      <Search />
      <button onClick={() => setSidebar(true)}>Open Sidebar</button>
      {
        isLoading 
        ? <div>Loading...</div>
        : weather && <WeatherCard {...weather} />
      }
      <PrevCitites isOpen={sidebar} onClose={() => setSidebar(false)} />
      
    </div>
  )
}

export default App
