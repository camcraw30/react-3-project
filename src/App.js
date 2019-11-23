import React, {Component} from 'react';
import './reset.css';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Data from './components/Data/Data';
import data from "./data";


class App extends Component {
  constructor() {
    super();

    this.state = {
      employees: data,
      index: 0,
  }
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handlePrevious() {
    this.setState({index: this.state.index === 0 ? this.state.index = 24 : this.state.index - 1 })
  }
  
  handleNext() {
    this.setState({index: this.state.index === 24 ? this.state.index = 0 : this.state.index + 1})
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="body">
          <main className="whiteCard">
          <Data employees={this.state.employees} index={this.state.index}/>
          </main>
          <div className="buttons">
            <button onClick={() => this.handlePrevious()}> {'< Previous'} </button>
              <div className="blackDiamond">
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
              </div>
            <button onClick={() => this.handleNext()}> {'Next >'} </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
