import React, { Component } from 'react';
import './App.css';
import Joke from "./components/Joke/Joke";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    jokes: [],
    defaultCount: 5
  };

  componentDidMount() {
    this.getJokes(this.state.defaultCount);
  };

  getJokes = (count) => {
    const promises = [];
    for (let i = 0; i < count; i++) {
      const result = this.getNewJoke();
      promises.push(result);
    }

    Promise.all(promises).then(jokes => {
      this.setState({jokes});
    });
  };

  getNewJoke = () => {
    return fetch('https://api.chucknorris.io/jokes/random').then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something wrong with request');
    }).catch(error=>{
      console.error(error);
    });
  };

  addJoke = () => {
    this.getNewJoke().then(result => {
      const jokes = [...this.state.jokes];
      jokes.push(result);
      this.setState({jokes});
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.jokes.map(joke => <Joke text={joke.value} key={joke.id} />)}
        <Button onClick={this.addJoke}>Get new Joke!</Button>
      </div>
    );
  }
}

export default App;
