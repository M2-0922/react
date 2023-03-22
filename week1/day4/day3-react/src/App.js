import './App.css';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Card from "./components/Card/Card"
import cardOneImage from "./image/card-1.png"
import cardTwoImage from "./image/card-2.png"
import cardThreeImage from "./image/card-3.png"
<<<<<<< HEAD
function App() {
=======

import data from "./assets/data/houseData.json"

function App() {

  // console.log(data);

  const cardElements = data.map((house, index) => <Card key={house.id} {...house} />);

  // const arr = [
  //   <h1>Hello</h1>,
  //   <h2>World</h2>,
  //   <h3>Developers</h3>
  // ]

>>>>>>> master
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="card-list">
<<<<<<< HEAD
=======
        {
          cardElements
        }
        {/* {
          data.map((house) => {
            return <Card 
              key={house.id}
              {...house}
              // title={house.title} 
              // price={house.price}
              // rating={house.rating}
              // like={house.like}
              // image={house.image}
              // location={house.location}
            />
          })
        } */}
        
      {/* <Card
          title="Joshua Tree, California, US"
          rating="5.0"
          like="3"
          location="USA"
          image={cardOneImage}
          price="6,610"
        />
        <Card
          title="Bend, Oregon, US"
          rating="5.0"
          like="30"
          location="USA"
          image={cardTwoImage}
          price="323"
        />
        <Card
          title="Boulder, Utah, US"
          rating="4.8"
          like="2"
          location="USA"
          image={cardThreeImage}
          price="1,822"
        /> */}
>>>>>>> master
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
