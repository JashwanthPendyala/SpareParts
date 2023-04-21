import React, { useState } from 'react'
import { Col, Container, Form, FormGroup, FormLabel, Row } from 'react-bootstrap'

const NewSupplier = () => {

    const[supplierName,setSupplierName] = useState("")

    return (
        <Container>
            <Row>
                <h1>New Supplier</h1>
            </Row>
            <Form className='mt-2'>
                <FormGroup>
                    <Row>
                        <Col sm="4"><Form.Label><span ><p className='py-2' >Name</p></span></Form.Label></Col>
                        <Col sm="6">
                            <Form.Control type="text" id='boxes' placeholder="Supplier Name" value={supplierName}
                                onChange={(e) => setSupplierName(e.target.value)} />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <div>
                        <Col sm="4"><Form.Label><span ><p className='py-2' >Name</p></span></Form.Label></Col>
                        <Col sm="6">
                            <Form.Control type="text" id='boxes' placeholder="Supplier Name" value={supplierName}
                                onChange={(e) => setSupplierName(e.target.value)} />
                        </Col>
                        </div>
                    </Row>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default NewSupplier