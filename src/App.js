import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/product';
// import { Container } from 'react-bootstrap'


function App() {
  return (
    <>
      <Header />
      <Product/>  
      <Footer/>
    </>
     );
}

export default App;
