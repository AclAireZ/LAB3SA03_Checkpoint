import  CharacterCard from './CharacterCard';
import './App.css';
import WordCard from './WordCard';


// const word = 'hello';
var wordArray = ['hello', 'world', 'React']
var word = wordArray[Math.floor(Math.random()*wordArray.length)];

const buttonrefresh = () => {
  window.location.reload();
}

function App(){
  return (
    <div className = 'box'>
        <WordCard value={word}/>
        <button className = 'button' onClick={buttonrefresh}>new game</button>
    </div>
  );
}

export default App;
