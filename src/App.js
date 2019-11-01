import React, { Component } from 'react';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: null
    };
  }
  
  componentDidMount = () => {
    this.getSimpson();
  }
  
  getSimpson = () => {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes') // API Wild
//    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes') // réelle API
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson: data[0]
        });
    });
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.getSimpson}>Another Simpsons Quote</button>
        {
        this.state.simpson
          ? <DisplaySimpson simpson={this.state.simpson} />
          : <p>No data yet</p>
        }
      </div>
    );
  }
}

export default App;
