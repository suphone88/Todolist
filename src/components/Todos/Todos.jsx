import React from "react";
import TodoItem from "../TodoItem/TodoItem";

class Todos extends React.Component {
  state = {
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
    todoTitle: "",
  };
  handleChange = (e) => {
    this.setState({
      todoTitle: e.target.value,
      // [e.target.name]:e.target.value
    });
  };

  createNewTodo = (e) => {
    const todos = [...this.state.todos];
    const id = todos.lemgth ? todos[todos.length - 1].id + 1 : 1;
    todos.push({ id, title: this.state.todoTitle });
    this.setState({ todos });
  };

  deleteTodo = (id) => {
    //console.log(id);
    const todos = [...this.state.todos];
    //const index = todos.findIndex(todo=>todo.id===id);
    this.setState({ todos: todos.filter((todo) => todo.id !== id) });
  };

  updateTodo = (data) => {
    //console.log(data);
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.id === data.id);
    todos[index].title = data.title;
    this.setState(todos)
  };

  render = () => {
    return (
      <div>
        <div>
          <h1 style={{ marginLeft: "2em" }}> {this.props.title}</h1>
        </div>

        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              title={todo.title}
              key={todo.id}
              deleteTodo={this.deleteTodo}
              id={todo.id}
              updateTodo={this.updateTodo}
            />
          ))}
        </ul>
        <div>
          <input
            style={{ marginLeft: "4.5em", padding: "0.5em" }}
            type="text"
            name="title"
            value={this.state.todoTitle}
            onChange={this.handleChange}
          ></input>
          <button style={{ padding: "0.5em" }} onClick={this.createNewTodo}>
            Add Title
          </button>
        </div>
      </div>
    );
  };
}

export default Todos;
