import './App.css';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Card from "./components/Card/Card"
import cardOneImage from "./image/card-1.png"
import cardTwoImage from "./image/card-2.png"
import cardThreeImage from "./image/card-3.png"

import data from "./assets/data/houseData.json"

function App() {

  // console.log(data);

  const cardElements = data.map((house, index) => <Card key={house.id} {...house} />);

  // const arr = [
  //   <h1>Hello</h1>,
  //   <h2>World</h2>,
  //   <h3>Developers</h3>
  // ]

  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="card-list">
        <Card
          rating="5.0"
          like="6"
          location="USA"
          title="Joshua Tree, California, US"
          price="6,610"
          image={cardOneImage}
        />
        <Card
          rating="5.0"
          like="30"
          location="USA"
          title="Bend, Oregon, US"
          price="283"
          image={cardTwoImage}
        />
        <Card
          rating="4.8"
          like="6"
          location="USA"
          title="Boulder, Utah, US"
          price="1,869"
          image={cardThreeImage}
        />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
