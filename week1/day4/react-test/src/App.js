import './App.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Footer from './component/Footer/Footer';
import Card from './component/Card/Card';
import cardOneImage from './image/card-1.png'
import cardTwoImage from './image/card-2.png'
import cardThreeImage from './image/card-3.png'



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="card-list">
        <Card 
          title="Joshua Tree, California, US" 
          rating="5.0" 
          like="6" 
          location="USA"
          price="6,610" 
          image={cardOneImage} 
          available="Sold out"
        />
        <Card 
          title="Bend, Oregon, US" 
          rating="5.0" 
          like="30" 
          location="USA"
          price="283" 
          image={cardTwoImage} 
          available="Available"
        />
        <Card 
          title="Boulder, Utah, US" 
          rating="4.8" 
          like="2" 
          location="USA"
          price="1,889" 
          image={cardThreeImage} 
          available="Available"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
