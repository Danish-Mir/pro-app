// import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/product';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

  const [data, setData]=useState([]);   
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/products/')
    .then(response=>{
      setData(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[])
  

  return (
    <>
      <Header />
      <Container>
      <Row>
        {data.map((product)=>{
        return <Col md={3}>
        <Product prod={product} />
        </Col>  
      })}
      </Row>
    </Container>
      <Footer/>
    </>
     );
}

export default App;
