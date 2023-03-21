import './App.css'
import { Component } from 'react'
import Header from "./components/Header/Header"

class App extends Component{

  state = {
    count: 0,
    character: {},
    list: []
  } // class field

  componentDidMount(){
    // this method will only called once when the component render on the screen.
    console.log("Hello i m in component did mount method");
    fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then(data => {
      this.setState({character: data})
      // console.log(data);
    })
  }

  updateList = () => {
    let newArr = [];
    newArr.push(this.state.count)
    this.setState({list: newArr})
  }
  // componentWillMount(){
    
  // }

  render(){
    return (
      <div className="App">
        <Header count={this.state.count} items={this.state.list} />
        <h1 style={{color: "white"}}>{this.state.count}</h1>
        <button onClick={() => this.setState(prev => ({count: prev.count + 1}))}>increase</button>
        <button onClick={this.updateList}>Update List</button>
        <h1>{this.state.character.name}</h1>
        <h3>{this.state.character.birth_year}</h3>
      </div>
    )
  }
}

export default App
