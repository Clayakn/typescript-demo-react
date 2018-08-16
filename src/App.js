import React, { Component } from 'react';
import Title from './components/Title';

import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['Iron Man'],
      title: ''
    }
    this.changeTitle = this.changeTitle.bind(this)
  }

  changeTitle(val) {
    this.setState({
      title: val
    })
  }

  addToList() {
    this.state.list.push(this.state.title)
    this.setState({
      title: ''
    })

  }
  render() {
    const displayTitles = this.state.list.map((title,i) => {
      return (
        <div key={i}>
        <Title title={title}/>
        </div>
      )
    })
    return (
      <div className="App">
      <h1>List</h1>
      <input value={this.state.title} onChange={(e) => this.changeTitle(e.target.value)}/>
      <button onClick={ () => this.addToList() }>Add Title</button>
      {displayTitles}
      </div>
    );
  }
}

export default App;
