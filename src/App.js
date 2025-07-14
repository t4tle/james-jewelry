import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import JewleryCard from './component/jewels';
import JewelryDetail from './component/JewelryDetail';
import jewelryList from './component/Jewelrylist';
import { CartProvider } from './context/CartContext';
import Cart from './component/Cart';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <h1>Welcome to James Jewlery Store</h1>
          <Cart />
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
    </CartProvider>
  );
}

export default App;
