import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
axios.defaults.withCredentials = true;
const ChangePassword = () => {
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [submitStatus, setSubmitStatus] = useState(true)
    const [passSpanMsg, setPassSpanMsg] = useState('')
    useEffect(() => {
        matchPass();
    }, [confirmPass])




    // axios({
    //     method: 'post',
    //     url: '/change-password',
    //     headers: {
    //       'Authorization': 'Bearer ' + authToken,
    //       'Content-Type': 'application/json'
    //     },
    //     data: {
    //       oldPassword: 'current_password',
    //       newPassword: 'new_password'
    //     }
    //   })

    const matchPass = () => {
        // console.log(oldPass, newPass, confirmPass);
        if (newPass === confirmPass && newPass !== '') {
            console.log("match", oldPass, newPass, confirmPass);
            setSubmitStatus(false);
            setPassSpanMsg("")
        } else {
            console.log("no match", oldPass, newPass, confirmPass);
            setSubmitStatus(true);

        }
        if (newPass !== confirmPass && confirmPass !== '') {
            setPassSpanMsg("Password Didn't Matched...!")
        }
        console.log(submitStatus)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const obj = {
            "old_password": oldPass,
            "new_password": newPass
        }
        let token = sessionStorage.getItem("X-CSRFTOKEN");
        console.log(token);
       await axios.patch("http://192.168.7.148:8010/user/changepas/", obj, {
            // headers: {
            //     Authorization: sessionStorage.getItem("X-CSRFTOKEN"),
            //     'withCredentials': true 
            // }
            'withCredentials': true 
        })
            // axios.patch("http://192.168.4.201:8000/user/changepas/", obj, {
            //     "Content-Type": "application/json",
            //     "Vary": "Accept",
            //     "Authorization": `Bearer ${token}`
            // })
            .then(response => {
                console.log(response.data, "Im at line 36");
                // setResponse(response.data.user)
            })
        console.log(oldPass, newPass, confirmPass);
        setOldPass("")
        setNewPass("")
        setConfirmPass("")
    }
    return (
        <Card className='backImg'>
            <div className='card2'>

                <Container>
                    <Form className='text-center'>
                        <Row>
                            <Col sm='6'>
                                <h3 className='textHeading1 mt-4'>Login</h3>
                            </Col>
                        </Row>
                        <Form.Group className="mt-4" >
                            <Row>
                                <Col sm="2"><Form.Label><span ><p className='py-2 pcolor' >Old Password:</p></span></Form.Label></Col>
                                <Col sm="4">
                                    <Form.Control type="text" id='boxes' placeholder="Enter old password" value={oldPass}
                                        onChange={(e) => setOldPass(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mt-4" >
                            <Row>
                                <Col sm="2"> <Form.Label><span ><p className='py-2 pcolor' >New Password:</p></span></Form.Label></Col>
                                <Col sm="4">
                                    <Form.Control type="text" id='boxes' placeholder="Enter password" value={newPass}
                                        onChange={(e) => setNewPass(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mt-4" >
                            <Row>
                                <Col sm="2"> <Form.Label><span ><p className='py-2 pcolor' >Confirm Password:</p></span></Form.Label></Col>
                                <Col sm="4">
                                    <Form.Control type="text" id='boxes' placeholder="Enter password" value={confirmPass}
                                        onChange={(e) => {
                                            setConfirmPass(e.target.value);

                                        }} />
                                    <span>{passSpanMsg}</span>
                                </Col>

                            </Row>
                        </Form.Group>
                        <Row>
                            <Col sm="8" className='mb-2 mt-2'>

                                <Button variant="info" id='boxes1' disabled={submitStatus} type="submit" onClick={handleSubmit}>
                                    Submit
                                </Button>

                            </Col>


                            {/* <Col sm="3" className='mb-2 box'>
                                    <p variant="info" id='boxes'>
                                        Forgot<a href="#" className='text-info'><b> password?</b></a>
                                    </p>
                                </Col> */}
                        </Row>
                        {/* <Row>
                                <Col sm="6" className='mt-3'>
                                    <h6 className="pcolor">OR</h6>
                                    <div className="pcolor">
                                        Don't have an Account?
                                        <Link to='/signup'><a href="#"><b className='pcolor text-info'> Sign up</b></a></Link>
                                    </div>
                                    <div className="pcolor">
                                        <p class="mt-2 mb-2 text-info"> &copy; 2022-2023</p>
                                    </div>
                                </Col>
                            </Row> */}
                    </Form>
                </Container>
            </div>
        </Card>
    )
}

export default ChangePassword