import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import todoReducer from "../../reducer/todoReducer";
import './style.css'
import ChildJunkyBunky from "./ChildJunkyBunky";

// 1. Define the initial state
const initialState = { counterReducer: 0 };

// 2. Create a reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { counterReducer: state.counterReducer + 1 };
    case 'decrement':
      return { counterReducer: state.counterReducer - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function JunkyBunky(props) {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, []);
  const inputRef = useRef();
  const [message, setMessage] = useState("Hello World!");
  const [dataFromChild, setDataFromChild] = useState('');
  const [count, setCount] = useState(0);
  const [countCallback, setCountCallback] = useState(0);
  const [state, dispatchCounter] = useReducer(counterReducer, initialState);

  // Fetch sample todos on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((todo) => {
          dispatch({ type: "ADD", title: todo.title });
        });
      });
  }, []);

  // Focus input on load
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const handleAdd = useCallback(() => {
    if (input.trim()) {
      dispatch({ type: "ADD", text: input });
      setInput("");
    }
  }, [input]);

  const totalTodos = useMemo(() => todos.length, [todos]);

  const handleUpdate = (newMessage) => {
    setMessage(newMessage);
  };
  const handleDataFromChild = (inputValueFromChild) => {
    setDataFromChild(inputValueFromChild);
  };

  // memoize the squared calculation
  const squared = useMemo(() => count * count, [count]);

  // useCallback - memoize the increment function
  const incrementMemoize = useCallback(()=> {
    setCountCallback(prevCount => prevCount + 1);
  });

  // useCallback - memoize the increment function
  const resetMemoize = useCallback(()=> {
    setCountCallback(0);
  });

  return (
    <>
      <div style={{ margin: "65px 0px 15px 0" }}>
        {/* <h1 style={{ fontSize: "35px !important" }}>JunkyBunky</h1> */}
      </div>

      {/* <div className="parent-child-props-update">
        <span style={{display: 'block', height: '1px', borderTop: '1px solid #ccc', margin: '1em 0', padding: '0'}}></span>
        <p>Message: 'from parent where child can updates its props:'- {message}</p>
        <ChildJunkyBunky updateMessage={handleUpdate} />
      </div> */}

      {/* <span>Mini App: Todo List with Theme Toggle</span> */}

      <div style={{ marginTop: 20 }}>
        {/* <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
        />
        <button onClick={handleAdd}>Add</button> */}

        {/* <p>Total Todos: {totalTodos}</p> */}

        <ul>
          {/* {todos.map((index, todo) => (
            <li key={index}>
              {todo.text}{" "}
              <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
                ❌
              </button>
            </li>
          ))} */}
        </ul>

        <div className="react-hooks">
          <h3 style={{fontSize: '30px'}}>React Hooks</h3>
          <span>Message from Parent: {message}</span>
          <p>Input value data from Child: {dataFromChild}</p>
          <ChildJunkyBunky messageProps={message} updateTextHandler={handleUpdate} sendDataToParent={handleDataFromChild} />

          <hr style={{borderTop: '1px solid red', }}></hr>
          <p>useMemo</p>
          <span>Square of {count} : </span>
          <button onClick={()=> setCount(count+1)} className="rounded px-4 py-2 text-xs bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">+</button>
          {squared}
          <button onClick={()=> setCount(count-1)} className="rounded px-4 py-2 text-xs bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">-</button>
          <button className="rounded px-4 py-2 text-xs bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300" onClick={()=> setCount(0)}>Reset</button>

          <hr style={{borderTop: '1px solid red', }}></hr>
          <p>useCallback</p>
          <button onClick={incrementMemoize} className="rounded px-4 py-2 text-xs bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Increment</button>
          <p>Count: {countCallback}</p>
          <button onClick={resetMemoize} className="rounded px-4 py-2 text-xs bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Reset</button>

          <hr style={{borderTop: '1px solid red', }}></hr>
          <p>useReducer</p>
          <h2>Count: {state.counterReducer}</h2>
          <button onClick={() => dispatchCounter({ type: 'decrement' })} className="rounded px-4 py-2 text-xs bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">-</button>
          <button onClick={() => dispatchCounter({ type: 'increment' })} className="rounded px-4 py-2 text-xs bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">+</button>
          <button onClick={() => dispatchCounter({ type: 'reset' })} className="rounded px-4 py-2 text-xs bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Reset</button>
        </div>

        {/* Notes */}
        <div style={{ border: "solid red", display: 'none' }}>
          <h1>Hooks</h1>

          <hr className="divider-line"></hr>
          <p>
            1. useState – Manage local state Use case: Form inputs, toggles,
            counters, etc. 2. useEffect – Side effects (API calls,
            subscriptions, timers) Use case: Fetch data, update document title,
            cleanup. 3. useContext – Global state or shared data Use case:
            Theme, auth, language, user info.
            4. useRef – Access DOM or persist values without re-render
            Use case: Focus input, store timeout IDs, scroll position.
            5. useMemo – Memoize expensive calculation
            Use case: Avoid recalculating derived values unless dependencies change.

            6. useCallback – Memoize function definition
            Use case: Prevent child re-renders or re-creating functions in dependencies.

            7. useReducer – Complex state logic (like Redux)
            Use case: Form handling, multi-step flows, counters with actions.

            Q. no, just explain is useReducer is same way implemented in redux action, reducer logic or different,
            Ans: Is useReducer like Redux?
            Yes ✅ — useReducer works similarly to Redux in that:

            You have a state object

            You change it using actions

            Those actions are handled by a reducer function

            But ⚠️ it’s only local to your component — not global like Redux.

            🎯 Key Differences
            Feature	useReducer	Redux
            Scope	Local to one component	Global app state
            Setup	No boilerplate	Needs store, actions, reducers
            Middleware	Not supported	Supports middleware (e.g. Redux Thunk)
            Async handling	Manual (useEffect)	Thunk/saga, easier async

            Real-Life Example Using useReducer
            Let’s say you’re building a shopping cart inside one component:

            🛒 1. Cart reducer

                {/* function cartReducer(state, action) {
                switch (action.type) {
                    case 'ADD_ITEM':
                    return [...state, action.item];
                    case 'REMOVE_ITEM':
                    return state.filter(item => item.id !== action.id);
                    default:
                    return state;
                }
                } */}

            🛍️ 2. Using it in component

            {/* import { useReducer } from 'react';

            const initialCart = [];

            function ShoppingCart() {
            const [cart, dispatch] = useReducer(cartReducer, initialCart);

            const addItem = () => {
                dispatch({ type: 'ADD_ITEM', item: { id: 1, name: 'Shoes' } });
            };

            const removeItem = () => {
                dispatch({ type: 'REMOVE_ITEM', id: 1 });
            };

            return (
                <div>
                <h2>Cart Items: {cart.length}</h2>
                <button onClick={addItem}>Add Shoes</button>
                <button onClick={removeItem}>Remove Shoes</button>
                </div>
            );
            } */}
            🔁 Same logic in Redux
            Redux uses the same kind of reducer, but you define it globally and dispatch from anywhere in the app.

            {/* // Redux reducer */}
            {/* function cartReducer(state = [], action) {
            switch (action.type) {
                case 'ADD_ITEM':
                return [...state, action.item];
                case 'REMOVE_ITEM':
                return state.filter(item => item.id !== action.id);
                default:
                return state;
            }
            } */}
            Then you'd use:

            {/* dispatch({ type: 'ADD_ITEM', item: { id: 1, name: 'Shoes' } }); */}
            ✅ Summary
            useReducer = Redux logic inside a component.

            Use it when you have multiple related states or complex state updates.

            For small apps or local logic, it's perfect and cleaner than useState.
          </p>

          <span style={{display: 'block', height: '1px', borderTop: '1px solid #ccc', margin: '1em 0', padding: '0'}}></span>
          In React, you cannot directly update props from a child component, because:

          🔒 Props are read-only — data flows one-way from parent to child.

          ✅ But you can indirectly update props by:
          Passing a callback function from the parent to the child.

          Child calls that function with new data.

          Parent updates its own state.

          New props get passed to child again.

          <div className="container">
            <label htmlFor="textarea" className="centerAlign">
              
            </label>
            <br />
            {/* <textarea
              id="textarea"
              name="textarea"
           
            </button> */}
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
