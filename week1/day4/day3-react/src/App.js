import './App.css';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Card from "./components/Card/Card"
import cardOneImage from "./image/card-1.png"
import cardTwoImage from "./image/card-2.png"
import cardThreeImage from "./image/card-3.png"
function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="card-list">
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
