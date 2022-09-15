import React from "react";
import TodoItem from "../TodoItem/TodoItem";


class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "learn react",
        },
        {
          id: 2,
          title: "practice react",
        },
      ],
      todoTitle:""
    };
    
  }
  handleChange= (e) => {
    this.setState({
      todoTitle:e.target.value
    });
  }


  render = () => {
    return (
      <div>
        <div><h1> {this.props.title}</h1></div>
        <input type="text" name="title" value={this.state.todoTitle}
        onChange={this.handleChange} ></input>
        <button>Add</button>


        <ul>
        {this.state.todos.map(todo => (
          <TodoItem title = {todo.title} />
        ))}
        
        </ul>
      </div>
    );
  };
}

export default Todos;
