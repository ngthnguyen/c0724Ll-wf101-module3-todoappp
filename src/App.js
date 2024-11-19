// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ''
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAddItem = () => {
    const { item, list } = this.state;
    if (item.trim()) {
      this.setState({
        list: [...list, item],
        item: ''
      });
    }
  };

  render() {
    const { list, item } = this.state;

    return (
      <div className="App">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Enter a task"
          value={item}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddItem}>Add</button>
        <ul>
          {list.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
