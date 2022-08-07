import  CharacterCard from './CharacterCard';
import './App.css';
import WordCard from './WordCard';


const word = 'Hello';

function App(){
  return (
    <div className = 'box'>
        <WordCard value={word}/>
    </div>
  );
}

export default App;
