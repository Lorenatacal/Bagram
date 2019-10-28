import React from 'react';
import BustMessage from './BustMessage';

function Play( {handleHit, handTotal} ) {
    return(
        <React.Fragment>
            <button
                onClick={handleHit}
            // to the button we execute a function when you click it
            >
            HIT</button>
            < BustMessage 
            total={handTotal} 
            />
        </React.Fragment>
    )
}

export default Play