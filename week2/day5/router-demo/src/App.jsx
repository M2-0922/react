import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //need install
//import { BrowserRouter, Routes, Route, Link} from 'react-router-dom' //we can change browserrouter name with "as"
import Navbar from './components/Header/Nav'
import HomePage from './pages/Homepage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import CharacterPage from './pages/CharacterPage/CharacterPage'
// import CharacterProfile from './pages/CharacterProfile/CharacterProfile'

function App() {

  // router is put inside router component
  return (
    <Router>
    {/* <BrowserRouter> */}
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/characters' element={<CharacterPage />} />
          {/* we can send dinamic path with ":" and keyword, in this case id */}
          {/* <Route path='/characters/:id' element={<CharacterProfile />} />  */}
        </Routes>
    {/* </BrowserRouter> */}
    </Router>
  )
}

export default App
