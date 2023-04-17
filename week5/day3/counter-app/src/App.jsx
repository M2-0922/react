import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Counter from "./pages/Counter/Counter"
import styled from "styled-components"

const NavContainer = styled.nav`
  ul{
    display: flex;
    align-items:center;
    gap: 12px;
    list-style:none;
    li{
      a{
        text-decoration: none;
        color: white;
      }
    }
    h1{
      margin-right: auto;
    }
  }
`;

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <NavContainer>
          <ul>
            <h1>Logo</h1>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/count"}>Count</Link>
            </li>
          </ul>
        </NavContainer>
        <Routes>
          <Route path='/count' element={<Counter />} />
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
