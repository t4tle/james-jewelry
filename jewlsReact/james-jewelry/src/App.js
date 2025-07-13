import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import JewleryCard from './component/jewels';
import JewelryDetail from './component/JewelryDetail';
import jewelryList from './component/Jewelrylist';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to James Jewlery Store</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Jewelry List</h2>
                <div className="jewelry-list">
                  {jewelryList.map(jewlery => (
                    <JewleryCard key={jewlery.jID} jewlery={jewlery} />
                  ))}
                </div>
              </>
            }
          />
          <Route
            path="/jewelry/:id"
            element={<JewelryDetail jewelryList={jewelryList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
