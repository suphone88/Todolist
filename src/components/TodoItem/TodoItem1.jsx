import React, { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({ title, id, deleteTodo }) => {
  const [editTitle, setEditTitle] = useState("");
  console.log();
  const [show,setShow] = useState(false);
  let element = title;
  if(show){
    <div>
        element = (
        <input 
        type="text"
        value={editTitle}
        onChange={e=>setEditTitle(e.target.value)}
        />
        <button>Update</button>
    );
    </div>
  }

  return (
    <li className={classes.todoitem}>
      {props.title}
      <button
        onClick={props.deleteTodo.bind(this, props.id)}
        className={classes.crossX}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
