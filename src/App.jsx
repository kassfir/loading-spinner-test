import { useState } from 'react';
import './App.css'
import {SuccessMark} from './components/LoadingSpinner'

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <SuccessMark isActive={isActive} />
      <button
        onClick={(event) => {
          event.preventDefault();
          setIsActive(!isActive);
        }}>
        Change state
      </button>
    </>
  )
}

export default App
