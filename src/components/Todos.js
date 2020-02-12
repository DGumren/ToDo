import React, { useState } from "react";
import "../App.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const deleteTodo = indexToDelete => {
    setTodos(prevTodos => {
      return prevTodos.filter((value, index) => {
        return indexToDelete !== index;
      });
    });
  };
  return (
    <div className="Todo">
      <h1 className="Font">
        <b>My Todo List</b>
      </h1>

      <div className=" Todo2 input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new todo"
          aria-label="Enter new todo"
          aria-describedby="button-addon2"
          name={inputValue}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => {
              setTodos(prevTodos => [...prevTodos, inputValue]);
              setInputValue("");
            }}
          >
            Add
          </button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map((value, index) => {
          return (
            <li
              className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"
              key={index}
            >
              {value}
              <span
                type="button"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                X
              </span>
            </li>
          );
        })}
        <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
          {todos.length} items left
        </li>
      </ul>
    </div>
  );
};
export default Todos;
