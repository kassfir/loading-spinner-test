import { useState } from 'react';
import './App.css'
import {SuccessMark} from './components/SuccessMark'

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          setIsActive(!isActive);
        }}>
          {isActive ? 'Show button' : 'Hide button'}
      </button>
      <SuccessMark isActive={isActive} />
    </>
  )
}

export default App
