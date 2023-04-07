import React from 'react';
import './Footer.css'
// import logo from '../Images/OjasLogo.png'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,

    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

function Footer() {

    return (
        <MDBFooter className='mt-6 mb-6' color='white' bgColor="black"
        // style={{"marginTop":"-100px"}}
        >
            <MDBContainer className='p-1'>


                <section className='container'>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-2 mt-2'>
                            {/* <img src={logo} alt="logo"
                style={{ width: "75px", height: "75px", borderRadius: "10px" }}
                
                 /> */}

                            <h5 class='brand_name'>Contact Us</h5>
                            <p class='color'>spare-parts@example.com<br />+91 1000000000</p>
                            {/* <span>+91 9381737484</span> */}

                            <h6 className='text_color'>WORKING HOURS</h6>
                            <p>Mon-Sat 10:00am - 7:00pm</p>

                            {/* <section className='mb-1 px-2 '>
                <MDBBtn outline color="dark" floating className='m-1' href='#!' >
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='instagram' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='github' />
                </MDBBtn>
               
              </section> */}

                        </MDBCol>

                        <MDBCol lg='3' md='4' className='mb-4 mb-md-2 mt-2'>
                            <h5 class='color'>Information</h5>
                            <h6 className='text_color'>About Us</h6>
                            <ul className='list-unstyled mb-2'>

                                <li><a href="" ><h6 className='text_color'>Delivery information</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Privacy policy</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Brand</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Contact Us</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Returns</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Site map</h6></a></li>

                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-0 mb-md-2 mt-2'>
                            <h5 class='brand_name'>My Account</h5>

                            <ul className='list-unstyled mb-2'>

                                <li><a href="" ><h6 className='text_color'>Store Location</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Order History</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Wish List</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Newsletter</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Specials</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Gitfs Certificates</h6></a></li>
                                <li><a href=""><h6 className='text_color'>Affiliate</h6></a></li>

                            </ul>


                        </MDBCol>

                        <MDBCol lg='3' md='2' className='mb-4 mb-md-2 mt-2'>
                            <h5 class='brand_name'>Newsletter</h5>
                            <p>Enter your email address below to<br />
                                subscribe to our newsletter and keep up to date with discount and special offers.
                            </p>
                            <input type="search" className='bordering' placeholder='emailaddress...' />
                            <ul className='list-unstyled mb-2 mt-2'>
                                <li><Button className="btn btn-info" id='bordering'>Subscribe</Button></li>
                            </ul>
                            
                        </MDBCol>

                    </MDBRow>
                </section>

            </MDBContainer>

            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Copyright © 2011-2023 Ojas Innovative Technologies. All Rights reserved...
                <a className='text-white' href=''>
                    SparePartsCentral
                </a>
            </div>
        </MDBFooter>
    );
}
export default Footer;