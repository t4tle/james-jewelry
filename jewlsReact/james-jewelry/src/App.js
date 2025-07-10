import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Profile/>}/>
        <Route path='/' element={<Product/>}/>
      </Router>
    </div>
  );
}

export default App;
