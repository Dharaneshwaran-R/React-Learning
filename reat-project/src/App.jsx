import Card from './Card.jsx';
import MyButton from './button.jsx';
import profile from './assets/profile1.jpg';
import { useState } from 'react';
function App() {
  

  return (
    <>
      <h1>Dharaneshwaran R</h1>
      <img 
        src={profile} 
        alt="Profile"
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%"
        }}
      />
      <MyButton/>
      
    </>
  )
}

export default App
