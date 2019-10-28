import React from 'react';

function BustMessage( { total } ) {

    if(total > 21) {
      return(
        <p>Bust</p>
      )
    } else {
      return(
        <p>Not Bust</p>
      )
    }
  }
  
  export default BustMessage;