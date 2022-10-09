import React,{useState, useEffect} from 'react';
import './App.css';
import Meme from './components/Meme.js';
import MemeCard from './components/MemeCard.js';

function App() {
  const [memeData, setMemeData] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      setMemeData(data.data.memes);
    });
  }, [])
  return (
    <div className="App">
       <h1>Welcome to Meme Data</h1>
       {meme===null ? <Meme memeData={memeData} setMeme={setMeme}/> : <MemeCard meme={meme} setMeme={setMeme}/> }
    </div>
  );
}

export default App;
