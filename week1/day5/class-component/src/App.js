import './App.css';
import { Component } from 'react';

export default class App extends Component {
  counstructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1});
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount}>Add one</button>
      </div>
    )
  }
}
