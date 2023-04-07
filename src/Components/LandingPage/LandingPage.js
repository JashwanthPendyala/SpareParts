import React from 'react'
import './LandingPage.css'
import image from '../Images/MicrosoftTeams-image.png'
import backgroundImg from '../Images/SparePart.png'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap'

function LandingPage() {
  return (
    <div>
      <Card id='BackColor'>
        <Row >
          <Col sm="5">
            <img src={backgroundImg} className="ImgSize" />
          </Col>

          <Col sm="7">
            <h3 className='text1'>A Moment Of</h3>
            <h6 className='text2'>Caring Of Your</h6>
            <p className='textSize'>VEHICLE</p>
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
                    <Card.Img variant="top" src={image} />
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

export default LandingPage
