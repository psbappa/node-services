import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import todoReducer from "../reducer/todoReducer";

export default function JunkyBunky() {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, []);
  const inputRef = useRef();

  // Fetch sample todos on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((todo) => dispatch({ type: "ADD", text: todo.title }));
      });
  }, []);

  // Focus input on load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = useCallback(() => {
    if (input.trim()) {
      dispatch({ type: "ADD", text: input });
      setInput("");
    }
  }, [input]);

  const totalTodos = useMemo(() => todos.length, [todos]);

  return (
    <>
      <div style={{ margin: "65px 0px 15px 0" }}>
        <h1 style={{ fontSize: "35px !important" }}>JunkyBunky</h1>
      </div>

      <span>Mini App: Todo List with Theme Toggle</span>

      <div style={{ marginTop: 20 }}>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
        />
        <button onClick={handleAdd}>Add</button>

        <p>Total Todos: {totalTodos}</p>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
