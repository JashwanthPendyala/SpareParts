import React, { useState } from 'react'
import '../Login/Login.css'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { Link, Navigate, useNavigate, } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [showmessege, setmessege] = useState('')
    const [arr, setArr] = useState([])
    const [response, setResponse] = useState()
    const navigate = useNavigate();

 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

        const obj = {
            email: email,
            password: password
        }
        console.log(obj, "im at line 16");
        arr.push(obj)
        setArr(arr)
        setArr("")
        setEmail("")
        setPassword("")
        setShow(true)

        axios.post("http://192.168.7.148:8010/user/login/", obj)
            .then(response => {
                console.log(response.data, "Im at line 36");
                // setResponse(response.data.user)
                console.log(response.data.token)
                sessionStorage.setItem("X-CSRFTOKEN", response.data.token);
            })
    }
    const handlepassword = () => {
      
    }
    return (
        <div >
            <Card className='backImg'>
                <div className='card2'>

                    <Container>
                        <Form>
                            <Row>
                                <Col sm='6'>
                                    <h3 className='textHeading1 mt-4'>Login</h3>
                                </Col>
                            </Row>
                            <Form.Group className="mt-4" >
                                <Row>
                                    <Col sm="1"><Form.Label><span ><p className='py-2 pcolor' >Email:</p></span></Form.Label></Col>
                                    <Col sm="4">
                                        <Form.Control type="email" id='boxes' placeholder="Enter email" value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mt-4 mb-2" >
                                <Row>
                                    <Col sm="1"> <Form.Label><span ><p className='py-2 pcolor' >Password:</p></span></Form.Label></Col>
                                    <Col sm="4">
                                        <Form.Control type="email" id='boxes' placeholder="Enter password" value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Row>
                                <Col sm="3">

                                    <Button variant="info" id='boxes1' type="submit" onClick={handleSubmit}>
                                        Login
                                    </Button>

                                </Col>


                                <Col sm="3" className='mb-2 box'>
                                    <p variant="info" id='boxes'>
                                        Forgot<a href="#" className='text-info'><b onClick={handlepassword}> password?</b></a>
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6" className='mt-3'>
                                    <h6 className="pcolor">OR</h6>
                                    <div className="pcolor">
                                        Don't have an Account?
                                        <Link to='/signup'><a href="#"><b className='pcolor text-info'> Sign up</b></a></Link>
                                    </div>
                                    <div className="pcolor">
                                        <p className="mt-2 mb-2 text-info"> &copy; 2022-2023</p>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </Card>
            <div>
                <Modal show={show} >

                    <Modal.Body>
                        <h6>
                            {showmessege.length ? showmessege : "login Successfull"}
                        </h6>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to='/userpage'>
                            <Button className="btn btn-success" onClick={handleClose}>ok</Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    )
}
export default Login