import React, { Component } from 'react';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios';

const firstQuote = 
  [{
    "quote":"I believe the children are the future... Unless we stop them now!",
    "character":"Homer Simpson","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    "characterDirection":"Left"
  }]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: firstQuote[0]
    };
  }
  
  getSimpson = () => {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data)
        this.setState({
          simpson: data[0]
        });
    });
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.getSimpson}>Another Simpsons Quote</button>
        <DisplaySimpson simpson={this.state.simpson} />
      </div>
    );
  }
}

export default App;
