import React from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomeNav() {
    return (
        <div>
            <Navbar className="p-3 bg-info bg-gradient" expand="lg">
                <Container >
                    {/* <Link to='/'> */}
                    <Navbar.Brand href="/"><h3 className='pcolor'>Spare Part Central</h3></Navbar.Brand>
                    {/* </Link> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Row>
                            <Col>
                                <Link to='/signin'><Button className='btn btn-info'>Login</Button></Link>
                            </Col>
                            <Col>
                                <Link to='/signup'><Button className='btn btn-info'> Signup</Button></Link>
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HomeNav
