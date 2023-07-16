import CharacterContainer from './Containers/CharacterContainer';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Character Companion</h1>
        <hr width="90%"></hr>
      </header>
    </div>
    <div>
      
     <CharacterContainer/>
    </div>
    </>
    
  );
}

export default App;
