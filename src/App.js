import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: "",
    }

    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => this.setState({ data: result }));
  }
  render() {
    if (this.data === "") return "loading...";
      
      return (
        <div>
          <p>Doguinhos</p>
          <button onClick={this.fetchDog}>Novo doguinho</button>
          <div>
            <img src={ this.state.data.message } alt="Radom dog"/>
          </div> 
        </div>
    )
  }
}

export default App;
