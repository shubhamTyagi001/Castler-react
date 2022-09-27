import './App.css';
import { BrowserRouter } from "react-router-dom";
import Search from './components/Search';
import Pages from './components/Pages';


function App() {
 
  return (
    <div className="App">
  <BrowserRouter>
  <Search/>
  <Pages/>
  </BrowserRouter>
  </div>
  );
}

export default App;
