import React from 'react';

import CardList from './components/CardList';
import Play from './components/Play'

function App() {
  const [name, setName] = React.useState('Player')
  const [typedInput, setTypedInput] = React.useState('')

  const [deck, setDeck] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  // deck creates the deck and setDeck updates the state
  const [hand, setHand] = React.useState([]) // My hand is: 10, 5
  // creates state => state update function

  const handTotal = hand.reduce(
    (acc, val) => acc + val, 0
  )

  const isBust = handTotal > 21

  const handleHit = () => {
    const randomCardIndex = Math.floor(Math.random() * deck.length)
    const randomCard = deck[randomCardIndex]
    setHand([...hand, randomCard])
    setDeck(deck.filter(card => card !== randomCard))
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <input onChange={event => setTypedInput(event.target.value)} 
      />
      <button onClick={() => {
          setName(typedInput)
      }}>Submit</button>
      <CardList message='Deck' list={deck} />
      <CardList message= 'My hand is' list={hand} />
      <Play
      handleHit={handleHit}
      handTotal={handTotal}
      />
    </div>
  )
}


export default App;
