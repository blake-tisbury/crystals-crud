import './App.css';

import Player from './Player';
import Header from './Header';
import Info from './Info';
import Search from './Search';


function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Info/>
      <Player/>
    
    </div>
  );
}

export default App;
