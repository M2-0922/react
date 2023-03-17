import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Header/Nav"
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import CharacterPage from "./pages/CharacterPage/CharacterPage"
import CharacterProfile from './pages/CharacterProfile/CharacterProfile'
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/character' element={<CharacterPage />} />
          <Route path='/character/:id' element={<CharacterProfile />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
