import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Greeting from './components/Greeting';
function App() {
  return (
    <div className="App">
        <Header />
        <Router>
          <Products/>
        <Routes>
          <Route path="/Greeting" component={Greeting} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
