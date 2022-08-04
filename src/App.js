import React from 'react';
import './App.css';

function App() { 
  return (
    <div>       
      <CharacterCard value="h" />
      <CharacterCard value="i" />     
    </div>
  ); 
} 

const word = "Hello";
function App(){
  return (
    <div>
      {
        Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
      }
    </div>
  );
}

export default App;
