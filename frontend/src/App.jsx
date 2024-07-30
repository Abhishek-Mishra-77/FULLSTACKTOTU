import { useState, useContext } from 'react'
import './App.css';
// import { CounterContext } from './context/ContextApi';
import { increament , reset , decreament } from "./store/counterSlice";
import { useSelector, useDispatch } from "react-redux"


function App() {
  // const [count, setCount] = useState(0)
  // const { count, setCount } = useContext(CounterContext); 
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter)

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increament())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
