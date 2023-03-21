import { Component } from 'react'
import './App.css'

import Header from './components/Header/Header';

class App extends Component {

  state = {
    count: 0,
    character: {}
  }

  // Methods inside conponentDidMount() will be called ONLY ONCE when the component render on screen.
  componentDidMount() {
    console.log("I'm in a componentDidMount method!");

    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then(data => {
        this.setState({character: data})
        // console.log(data)
      });
  }

  componentWillUnmount() {
    
  }

  render() {
    console.log("I'm in a render method!")
    return (
      <div className="App">
        <Header count={this.state.count} />
        <h1>{this.state.count}</h1>
        <button onClick={() => { this.setState(prevState => ({ count: prevState.count + 1 }))}} >
          increase
        </button>
        <h1>{this.state.character.name}</h1>
        <h3>{this.state.character.birth_year}</h3>
      </div>
    )
  }
}

export default App
