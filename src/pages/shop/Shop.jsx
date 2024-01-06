import React from 'react';
import {useState,useEffect, useContext} from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../components/product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Shop = () => {
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

      <Container>
      <Row>
        {data.map((product)=>{
        return <Col md={3}>
        <Product prod={product} />
        </Col>  
      })}
      </Row>
    </Container>
      {/* <Footer/> */}
    </>
  )
}

export default Shop;