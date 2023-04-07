import React, { useState } from 'react'
import './UserPage.css'
import img from '../Images/BikeImg.png'
import { Button, Card, CardGroup, Col, Dropdown, FormSelect, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

function UserPage() {

    const handleLogout = () => {
        console.log(sessionStorage.getItem("X-CSRFTOKEN"));
        axios.get("http://192.168.7.148:8010/user/logout/").then(response => {
            console.log(response.data, "Im at line 36");
        })
    }
    const [year, setYear] = useState('')
    return (
        <div >
            <Card id='BackColor1'>
                <Row >
                    <Col sm="12 mt-4 mb-4 py-4">
                        <h1 className='text_1'>Find parts for your  vehicle</h1>
                        <p className='text_2'>over hundreds of brands  and thousands of  parts</p>
                        {/* <h3 className='text1'>A Moment Of</h3> */}
                        {/* <h6 className='text2'>Caring Of Your</h6> */}
                        {/* <p className='textSize'>VEHICLE</p> */}

                    </Col>
                </Row>
                <Row>
                    <div className='container-fluid'>
                        <Row xs={2} md={6} className="g-4">

                            <Col className='px-3' >
                                <Dropdown>
                                    <Dropdown.Toggle id="boxes" variant="light" >
                                        Select Year
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="#/action-1"> Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>


                            <Col className='px-3' >
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id='boxes'>
                                        Select Make
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="#/action-1"> Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col className='px-3'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id='boxes'>
                                        Select Model
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="#/action-1"> Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col className='px-3'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id='boxes'>
                                        Select Engine
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="#/action-1"> Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col className='px-3'>
                                <Link to="/changepass">
                                    <Button className="btn btn-success">Change Password</Button>
                                </Link>
                            </Col>
                            <Col className='px-3'>
                                <Button className='btn btn-danger' onClick={handleLogout}>Logout</Button>
                            </Col>
                        </Row>
                    </div>
                </Row>
                <Row>
                    <Col className='px-5 mt-3 mb-2'>
                        <div className="d-grid gap-2" id='btn1'>
                            <Button variant="info" size="md" id='boxes'>
                                Search
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card>

            <CardGroup>
                <Card id='BackColor2'>
                    <div className='container'>
                        <Row >
                            {Array.from({ length: 12 }).map((_, idx) => (
                                <Col className="mt-4 mb-4" sm="3">
                                    <Card className="mt-4">
                                        <Card.Img variant="top" src={img} />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                Hiiiii
                                            </Card.Text>
                                        </Card.Body>
                                        <Button className="btn btn-light" variant="outline-info" id='boxes'>Buy</Button>
                                        <Button className='btn btn-secondary' variant="outline-info" id='boxes'>Add To Cart</Button>
                                        <Col>
                                        </Col>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Card>
            </CardGroup>
        </div>
    )
}

export default UserPage
