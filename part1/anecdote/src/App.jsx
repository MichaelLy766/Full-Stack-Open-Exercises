import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Header = ({ text }) => (
  <h1>{text}</h1> 
)

const Anecdote = ({ anecdotes, index }) => (
  <p>{anecdotes[index]}</p>
)

const VoteCount = ({ votes, index }) => (
  <p>has {votes[index]} votes</p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(7))
  const [max, setMax] = useState(0)

  const indexOfMax = (arr) => {
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    // returns index of first max, if multiple maxes 
    return maxIndex;
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log('index of max', max)
    setMax(indexOfMax(copy))
  }

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * 7))

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <Anecdote anecdotes={anecdotes} index={selected} />
      <VoteCount votes={votes} index={selected} />
      <Button handleClick={handleVote} text='vote'/>
      <Button handleClick={nextAnecdote} text='next anecdote'/>
      <Header text='Anecdote with most votes'/>
      <Anecdote anecdotes={anecdotes} index={max} />
      <VoteCount votes={votes} index={max} />
    </div>
  )
}

export default App