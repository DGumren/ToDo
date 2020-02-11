import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="Todo">
      <div className=" Todo2 input-group mb-3">
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
            className="btn btn-outline-secondary"
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
      <ul class="list-group">
        {todos.map((value, index) => {
          console.log(value, index);
        })}
      </ul>
    </div>
  );
};
export default Todos;
