import './App.css';
import List from './List';
import Form from './Form';

const songList = [
  {
    songTitle: "Fireworks", 
    artistName: "Katy Perry" 
  }, 
  { 
    songTitle: "Party In The USA", 
    artistName: "Miley Cyrus" 
  }, 
  { songTitle: "Dynamite", 
    artistName: "Taio Cruz" 
  }]

function App() {
  return (
    <div className="App">
      <div className="Header">My Favorite Songs</div>
      <Form/>
      <List list={songList}/>
    </div>
  );
}

export default App;
