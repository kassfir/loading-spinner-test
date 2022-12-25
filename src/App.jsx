import { useState } from 'react';
import './App.css'
import {
  SuccessMark,
} from './components/SuccessMark'
import {
  SuccessScreen,
} from './components/SuccessScreen'

function App() {
  const [isCheckmarkVisible, setIsCheckmarkVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const successMessage = () => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span style={{fontWeight: 800, fontSize: 48, textAlign: 'center'}}>You did it!</span>
        <p style={{textAlign: 'center'}}>You've submitted your thing. Now you can rest easy!</p>
        <button 
          onClick={(event) => {
            event.preventDefault();
            setIsOverlayVisible(!isOverlayVisible);
          }}>Hide overlay</button>
      </div>
    )
  }

  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          setIsCheckmarkVisible(!isCheckmarkVisible);
        }}>
          {isCheckmarkVisible ? 'Hide checkmark' : 'Show checkmark'}
      </button>

      <button
        onClick={(event) => {
          event.preventDefault();
          setIsOverlayVisible(!isOverlayVisible);
        }}>
          {isOverlayVisible ? 'Hide overlay' : 'Show overlay'}
      </button>
      
      <SuccessMark isVisible={isCheckmarkVisible} />
      <SuccessScreen 
        isVisible={isOverlayVisible} children={successMessage()} timeout={5000}/>
    </>
  )
}

export default App
