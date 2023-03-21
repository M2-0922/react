import './App.css';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="card-list">
        {/* <Card /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
