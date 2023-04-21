import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'


const NewStock = () => {
  const [stockName, setStockName] = useState("");
  const [stockQuantity, setStockQuantity] = useState();
  const [stockPrice, setStockPrice] = useState();
  const [stockSupplier, setStockSupplier] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const stock = {
      "name" : stockName,
      "quantity":stockQuantity,
      "price":stockPrice,
      "supplier":stockSupplier
    }
    console.log(stock);
  }
  const handleReset = () => {


  }
  const handleClose = () => {

  }
  return (
    <Container>
      <Form>
        <Row>
          <Col sm='12'>
            <h3 className='mt-4'>New Stock</h3>
          </Col>
        </Row>
        <Form.Group className="mt-4" >
          <Row>
            <Col sm="4"><Form.Label><span ><p className='py-2' >Name</p></span></Form.Label></Col>
            <Col sm="6">
              <Form.Control type="text" id='boxes' placeholder="Enter old password" value={stockName}
                onChange={(e) => setStockName(e.target.value)} />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mt-4" >
          <Row>
            <Col sm="4"><Form.Label><span ><p className='py-2' >Quantity</p></span></Form.Label></Col>
            <Col sm="6">
              <Form.Control type="text" id='boxes' placeholder="Enter old password" value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)} />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mt-4" >
          <Row>
            <Col sm="4"><Form.Label><span ><p className='py-2' >Price</p></span></Form.Label></Col>
            <Col sm="6">
              <Form.Control type="text" id='boxes' placeholder="Enter old password" value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)} />
            </Col>
          </Row>
        </Form.Group>
        <Form.Select aria-label="Supplier" onClick={(e) => setStockSupplier(e.target.value)}>
          <option >Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          {/* I need to get the data dynamically*/}
        </Form.Select>
        <Form.Group>
          <Row>
            <Col sm="12" className='mb-2 mt-2'>
              <Button variant="info" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="info" onClick={handleReset}>
                Reset
              </Button>
              <Button variant="info" type="submit" onClick={handleClose}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default NewStock