import Reacct from "react";
import TodoItem from "../TodoItem/TodoItem";

const Todos = (props) => (
    
  <div>
    <h1>{props.title}</h1>
    <TodoItem title="learn React"/>
    <TodoItem title="lesson react"/>
  </div>
);

export default Todos;
