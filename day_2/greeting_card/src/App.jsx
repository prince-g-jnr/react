import GreetingCard from './component/Greeting_Card'
import './App.css'

function App() {
  return (
    <div>
      <GreetingCard name = "Ralph Waldo Emerson" message= "'The only person you are destined to become is the person you decide to be'" />
      <GreetingCard name = "William Shakespeare" message="'To be or not to be, that is the question.'" color= '#232470ff'/>
      <GreetingCard name = "Thomas A. Edison" message="I have not failed. I've just found 10,000 ways that won't work." color='#8f1c1cff'/>
    </div>
  )
};

export default App