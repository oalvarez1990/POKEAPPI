import logo from './logo.svg';
import './App.css';
import SearchBox from "./Components/Search/SearchBox"


function App() {
  return (
    <>
    <div className="banner"></div>
    <div className="container">
      <h1>Rick and Morty Wiki</h1>
      <SearchBox />
    </div>
  </>
  );
}

export default App;
