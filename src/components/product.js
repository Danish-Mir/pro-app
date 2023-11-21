import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Product=({prod})=> {

const url='http://127.0.0.1:8000/'
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url+prod.image} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.description}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product; 