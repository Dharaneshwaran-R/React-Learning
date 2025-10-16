import Card from './Card.jsx';
import MyButton from './button.jsx';
import profile from './assets/profile1.jpg';
import { useState } from 'react';
import Greet from './greeting.jsx';
function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      <Greet isLogged={isLogged} name="Dharan"/>
      {isLogged && <Card />}
    </>
  )
}

export default App
  