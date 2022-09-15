import React, { useState, Fragment } from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({ title, id, deleteTodo, updateTodo }) => {
  const [editTitle, setEditTitle] = useState(title);
  //console.log();
  const [show, setShow] = useState(false);
  let element = title;
  const handleUpdate = () => {
    setShow(false);
    updateTodo({ id, title: editTitle });
  };

  if (show) {
    element = (
      <>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        {/* <button onClick={(e) => updateTodo({ id, title: editTitle })}>
          Update
        </button> */}
        <button onClick={handleUpdate}>Update</button>
      </>
    );
  }

  return (
    <li className={classes.todoitem}>
      <span>{element}</span>
      <button onClick={deleteTodo.bind(this, id)} className={classes.crossX}>
        X
      </button>
      <button onClick={(e) => setShow(!show)} className={classes.editbtn}>
        Edit
      </button>
    </li>
  );
};

export default TodoItem;
