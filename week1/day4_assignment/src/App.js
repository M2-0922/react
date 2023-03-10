import './App.css';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import data from "./assets/data/personData.json"


function App() {
  return (
    <div className="App">
      <Header />
      {
        data.map((profile, index) => {
          return <Hero 
            name = {profile.name}
            position = {profile.position}
            url = {profile.url}
            about = {profile.about}
            interests = {profile.interests}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
