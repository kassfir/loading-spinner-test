import './SuccessScreen.css';

function SuccessScreen ({isVisible, children}) {

    
    return (
      <div className={`success-screen-overlay ${isVisible ? 'success-screen-overlay__visible' : 'success-screen-overlay__invisible'}`}>
        <main className='success-screen-content'>
            {children}
        </main>
      </div>
    )
}

export {
    SuccessScreen
};