import React from "react";
import TodoItem from "../TodoItem/TodoItem";

class Todos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        todos:[
            {
                id:1,
                title:"learn react"
            },
            {
                id:2,
                title:"practice react"
            }
        ]
    };
  }
  render = () => {
    return (
      <div>
        <h1> {this.props.title}</h1>
        <TodoItem title={this.state.todos[0].title} />
        <TodoItem title={this.state.todos[1].title} />
      </div>
    );
  };
}

export default Todos;
