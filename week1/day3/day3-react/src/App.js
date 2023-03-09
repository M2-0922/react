import './App.css';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
// import Footer from "./components/Footer/Footer"
import Card from "./components/Card/Card"
import cardOneImage from "./image/card1.png"
import cardTwoImage from "./image/card2.png"
import cardThreeImage from "./image/card3.png"


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="card-list">
        <Card 
          cardImage = {cardOneImage}
          rating = "5.0"
          like = "6"
          location = "USA"
          title = "Joshua Tree, California, US"
          price = "6,610"
        />
        <Card 
          cardImage = {cardTwoImage}
          rating = "5.0"
          like = "30"
          location = "USA"
          title = "Bend, Oregon, US"
          price = "283"
        />
        <Card 
          cardImage = {cardThreeImage}
          rating = "4.8"
          like = "2"
          location = "USA"
          title = "Boulder, Utah, US"
          price = "1,889"
        />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
