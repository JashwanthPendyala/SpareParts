import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./SignUp.css"

function SignUp() {

  const [email, setEmailadd] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [mobile_number, setMobile] = useState()
  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState()
  const [password2, setPassword2] = useState()
  const [arr, setArr] = useState([])
  const[eventsubmit,setEventsubmit] = useState(false)
  const [errors, setErrors] = useState(false)
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(e.target.value);

    const obj = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password1: password1,
      password2: password2,
      mobile_number: mobile_number,
    };

    let arr1 = []
    arr1.push(obj);
    setArr([...arr]);
    console.log(arr1, "arr1");

    setUsername("");
    setFirstName("");
    setLastName("");
    setEmailadd("");
    setMobile("");
    setPassword1("");
    setPassword2("");
    
    setEventsubmit(true);
    if (username.length === 0 || first_name.length === 0 || last_name === 0) {
      setErrors(true);
    }
    else {
      setErrors(false);
      setShow(true);
    }

    axios.post("http://192.168.4.9:8000/user/signup/", obj)
      .then(response => console.log(response.data));

  }


  return (
    <div>
      <Card className='Backgroundimg'>
        <div className='card1' >
          <Container >
            <Card.Body>
              <Form>
                <h3 className='textHeading mt-2'>Signup</h3>
                <Form.Group className="mt-4" >
                  <Row>
                    <Col sm="2">   <Form.Label><span ><p className='py-2 pcolor' >Email address:</p></span></Form.Label></Col>
                    <Col sm="4">
                      <Form.Control type="email" id='boxes' placeholder="Enter email" value={email}
                      onChange={(e) => setEmailadd(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mt-2" >
                  <Row>
                    <Col sm="2">   <Form.Label><span ><p className='py-2 pcolor' >First Name:</p></span></Form.Label></Col>
                    <Col sm="4">
                      <Form.Control type="text" id='boxes' placeholder="First Name" value={first_name} 
                      onChange={(e) => setFirstName(e.target.value)}/>
                    </Col>
                  </Row>
                </Form.Group>
                {
                errors && first_name.length == 0 ? <p style={{ color: "red" }}>* Please enter Valid Firstname</p> : null}
                <Form.Group className="mt-2" >
                  <Row>
                    <Col sm="2">   <Form.Label><span ><p className='py-2 pcolor' >Last Name:</p></span></Form.Label></Col>
                    <Col sm="4">
                      <Form.Control type="text" id='boxes' placeholder="Last Name" value={last_name} 
                      onChange={(e) => setLastName(e.target.value)}/>
                    </Col>
                  </Row>
                </Form.Group>
                {
                errors && last_name.length == 0 ? <p style={{ color: "red" }}>* Please enter Valid Firstname</p> : null}
                <Form.Group className="mt-0" >
                  <Row>
                    <Col sm="2">   <Form.Label><span ><p className='py-2 pcolor' >Mobile Number:</p></span></Form.Label></Col>
                    <Col sm="4">   <InputGroup className="mb-3">
                      <InputGroup.Text id="boxes">+91</InputGroup.Text>
                      <Form.Control id="boxes"
                        placeholder="Mobile Number"
                        type='number'
                        value={mobile_number}
                        onChange={(e) => setMobile(e.target.value)}
                        aria-label="mobile number" />
                    </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mt-0" >
                  <Row>
                    <Col sm="2">   <Form.Label><span ><p className='py-2 pcolor' >Username:</p></span></Form.Label></Col>
                    <Col sm="4">
                      <Form.Control type="^[A-Za-z][A-Za-z0-9_]{7,29}$" id='boxes' placeholder="Username" value={username}
                      onChange={(e) => setUsername(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>
                {
                errors && username.length == 0 ? <p style={{ color: "red" }}>* Please select Valid username</p> : null}
                <Form.Group className="mt-0" >
                  <Row>
                    <Col sm="2">   <Form.Label><span ><p className='py-2 pcolor' >Password:</p></span></Form.Label></Col>
                    <Col sm="4">
                      <Form.Control type="password" id='boxes' placeholder="Password" value={password1}
                      onChange={(e) => setPassword1(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mt-0" >
                  <Row>
                    <Col sm="2">   <Form.Label><span ><p className='py-2 pcolor' >Confirm Password</p></span></Form.Label></Col>
                    <Col sm="4">
                      <Form.Control type="password" id='boxes' placeholder="Enter email" value={password2}
                      onChange={(e) => setPassword2(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>
                <Row>
                  <Col sm="5">
                    <Button variant="info" id='boxes' type="submit" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>

            </Card.Body>
          </Container>
        </div>
      </Card>
      <div>
          <Modal show={show}>

            <Modal.Body>Wow..! Sign up successful...!</Modal.Body>
            <Modal.Footer>
              <Link to='/signin'>
                <Button variant="secondary" >
                Click to Login
              </Button>
              </Link>

            </Modal.Footer>
          </Modal>
        </div>
    </div>
  )
}

export default SignUp
