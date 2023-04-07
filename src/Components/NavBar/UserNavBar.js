import React from 'react'
import { Button, Col, Container, Form, Navbar, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserNavBar() {
    return (
        <div>
            <Navbar className="p-3 bg-info bg-gradient " expand="lg">
                <Container >
                    {/* <Link to='/'> */}
                    <Navbar.Brand href="/"><h3 className=' pcolor'>Spare Part Central</h3></Navbar.Brand>
                    {/* </Link> */}
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Form className="d-flex" >
                            <Form.Control
                                id='boxes'
                                type="search"
                                placeholder="Item Search..."
                                aria-label="Search"

                            />
                            <Button variant="btn btn-light" id='boxes'>Search</Button>
                        </Form>

                        <Stack direction="horizontal" gap={3}>
                            <Button type='button' className='btn btn-info'>Your Order</Button>

                            <Button type='button' className='btn btn-info'>Vender Dashboard</Button>

                            <Button type='button' className='btn btn-info'>My Cart</Button>

                            <Button className='btn btn-info'> Profile</Button>

                            <Button className='btn btn-info bg-light'id='boxes'> Logout</Button>

                        </Stack>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default UserNavBar
