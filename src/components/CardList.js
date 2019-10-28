import React from 'react';

function CardList( {message, list } ) {
    return(
      <p>{message}: {list.join(', ')}</p>
    )
  }

  export default CardList