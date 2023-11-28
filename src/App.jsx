// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';


function App() {

 return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </Router>
  );
  
}

export default App;
