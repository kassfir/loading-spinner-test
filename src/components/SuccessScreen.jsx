import { useEffect, useState } from 'react';
import './SuccessScreen.css';

function SuccessScreen ({isVisible, children, timeout}) {
    const [localIsVisible, setLocalIsVisible] = useState(isVisible);

    let timeoutFunction;

    useEffect(() => {
        clearTimeout(timeoutFunction);

        if (timeout > 0 && isVisible){
            timeoutFunction = setTimeout(() => {
                setLocalIsVisible(false);
            }, timeout);
        }

        setLocalIsVisible(isVisible);


    }, [isVisible])
    
    return (
      <div className={`
            success-screen-overlay 
            ${localIsVisible ? 'success-screen-overlay__visible' : 'success-screen-overlay__invisible'}
        `}>
        <main className='success-screen-content'>
            {children}
        </main>
      </div>
    )
}

export {
    SuccessScreen
};