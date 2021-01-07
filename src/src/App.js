import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }

  deleteItem(id) {
    //copy current list of item
    const list = [...this.state.list];

    //filter ot item being delted
    const updatedList = list.filter(item => item.id !== id)

    this.setState({ list: updatedList });
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    })
  }

  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with list and reset newItem input
    this.setState({
      list,
      newItem: ""
    })
  }
  render() {
    return (
      <div>
        adiciona um item...
        <br />
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />

        <button
          onClick={() => this.addItem()}
        > Adicionar </button>

        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  onClick={() => this.deleteItem(item.id)}>x</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default App;
