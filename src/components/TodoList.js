import React, { Component } from 'react'

export default class TodoApp extends Component {
  render() {
    let { todos } = this.props;

    let Todos = todos.map((todo, index) => {
      return (
        <li key={index}>{todo}</li>
      )
    })

    return (
      <ol>
        {Todos}
      </ol>
    )
  }
}
