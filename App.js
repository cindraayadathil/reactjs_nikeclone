import './App.css';
import React from 'react';
import Navi from './componenets/Navi'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img10 from './componenets/img10.png';
import img11 from './componenets/img11.png';
import img23 from './componenets/img23.png';
import img24 from './componenets/img24.png';
import img25 from './componenets/img25.png';
import img26 from './componenets/img26.png';
import img22 from './componenets/img22.gif';
import img21 from './componenets/img21.png';
import img12 from './componenets/img12.png';
import img13 from './componenets/img13.png';
import img14 from './componenets/img14.png';
import img15 from './componenets/img15.png';
import img28 from './componenets/img28.png';
import img29 from './componenets/img29.png';
import img30 from './componenets/img30.png';
import img31 from './componenets/img31.png';
import img32 from './componenets/img32.png';
import img33 from './componenets/img33.jpg';
import img34 from './componenets/img34.png';
import img35 from './componenets/img35.jpg';
import img36 from './componenets/img36.png';
import img37 from './componenets/img37.jpg';
import img38 from './componenets/img38.jpg';
import { Container ,Row, Col } from 'react-bootstrap';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';





function App() {
  
  return (
   <>
   <Navi/>
   <div style={{display:'flex'}}>
<h3 className='me-auto' style={{marginLeft:'3rem'}}>New Arrivals Just Landed</h3>
<h4 style={{marginRight:'2rem'}}>Shop</h4>
<Button variant="light" style={{marginRight:'1rem',borderRadius:'6rem'}} disabled>{"<"} </Button>
<Button variant="light" style={{marginRight:'3rem',borderRadius:'4rem'}} active>{">"} </Button>
</div>

        <Container> 
 <Row className='scroll-row'>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img12} />
 <Card.Body>
 <Card.Title>AIR JORDAN 1</Card.Title>
 </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img13} />
 <Card.Body>
 <Card.Title>DUNK</Card.Title>
 </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img14} />
 <Card.Body>
 <Card.Title>BLAZER</Card.Title>
 </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img15} />
 <Card.Body>
 <Card.Title>AIR FORCE 1</Card.Title>
 </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img15} />
 <Card.Body>
 <Card.Title>AIR FORCE 1</Card.Title>
 </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img15} />
 <Card.Body>
 <Card.Title>AIR FORCE 1</Card.Title>
 </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img15} />
 <Card.Body>
 <Card.Title>AIR FORCE 1</Card.Title>
 </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img15} />
 <Card.Body>
 <Card.Title>AIR FORCE 1</Card.Title>
 </Card.Body>
 </Card>
 </Col>
 </Row>
 </Container>

 <div className='shoe3'>
 <h3 className='me-auto' style={{marginLeft:'3rem',marginTop:'3rem'}}>Featured</h3>
        <img src={img22} width='1700px' height='700px' style={{marginLeft:'50px',marginBottom:'3rem'}} ></img>
   </div> 
    <div className="text-center">
    <h1 >NIKE SB DAY ONE</h1>
    <p style={{marginTop:'1rem'}}>Made to skate.Designed to support you from start</p>
    <Button  style={{borderRadius:'2rem'}} variant="dark">Shop</Button>
    </div>

    <div className='shoe4'>
 <h3 className='me-auto' style={{marginLeft:'3rem',marginTop:'3rem'}}>The Latest</h3>
        <img src={img21} width='1700px' height='700px' style={{marginLeft:'50px',marginBottom:'3rem'}} ></img>
   </div> 
    <div className="text-center">
    <h1 >CLASSIC REFRESH</h1>
    <p style={{marginTop:'1rem'}}>Featuring the modern interpretation of  classic pieces, this collection introduces the refined <br/>streetwear styles in a clean, minimal palette</p>
    <Button  style={{borderRadius:'2rem'}} variant="dark">Shop</Button>
    </div>

<div className='classics' style={{display:'flex',height:'3rem',marginBottom:'1rem'}}>
<h3 className='me-auto' style={{marginLeft:'3rem'}}>Classics Spotlight</h3>
<Button variant="light" style={{borderRadius:'20px'}} disabled>{"<"} </Button>
<Button variant="light" style={{borderRadius:'20px'}} active>{">"} </Button>
</div>
<Container fluid style={{marginLeft:'3rem'}}> 
 <Row className='scroll-row'>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
    <Card.Img variant="top" src={img23} />
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4} style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
    <Card.Img variant="top" src={img24} />
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4} style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
    <Card.Img variant="top" src={img25} />
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
    <Card.Img variant="top" src={img26} />
 </Card>
 </Col>
 </Row>
 </Container>

 <div className='sport' style={{display:'flex',height:'3rem',marginBottom:'1rem',marginTop:'2rem'}}>
<h3 className='me-auto' style={{marginLeft:'3rem'}}>Shop by sport</h3>
<Button variant="light" style={{borderRadius:'20px'}} disabled>{"<"} </Button>
<Button variant="light" style={{borderRadius:'20px'}} active>{">"} </Button>
</div>
<Container fluid style={{marginLeft:'3rem'}}> 
 <Row className='scroll-row'>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img28} />
 <Card.Body>
 <Card.Text><b>Nike Basketball</b></Card.Text>
 <Card.Text>Styles made for your game.</Card.Text>
 <a style={{textDecoration:'underline'}}>Shop</a>
 </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img29} />
 <Card.Body>
 <Card.Text><b>Nike golf</b></Card.Text>
 <Card.Text>Conquer any course in style.</Card.Text>
 <a style={{textDecoration:'underline'}}>Shop</a> </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img30} />
 <Card.Body>
 <Card.Text><b>Nike Trail</b></Card.Text>
 <Card.Text>Gear that leads to wild places.</Card.Text>
 <a style={{textDecoration:'underline'}}>Shop</a> </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img31} />
 <Card.Body>
 <Card.Text><b>Nike Tennis</b></Card.Text>
 <Card.Text>Server up in style.</Card.Text>
 <a style={{textDecoration:'underline'}}>Shop</a> </Card.Body>
 </Card>
 </Col>
 <Col xs={12} sm={6} md={4} lg={4}style={{padding: 0}}>
  <Card style={{ width: 'calc(100% - 2rem)', margin: '0 1rem'}}>
 <Card.Img variant="top" src={img32} />
 <Card.Body>
 <Card.Text><b>Nike Football</b></Card.Text>
 <Card.Text>Bring mad style to the pitch with the latest gear.</Card.Text>
 <a style={{textDecoration:'underline'}}>Shop</a> </Card.Body>
 </Card>
 </Col>
 </Row>
 </Container>

 <div className='sport' style={{display:'flex',height:'3rem',marginBottom:'1rem',marginTop:'2rem'}}>
<h3 className='me-auto' style={{marginLeft:'4rem'}}>Member Benefits</h3>
<Button variant="light" style={{borderRadius:'20px'}} disabled>{"<"} </Button>
<Button variant="light" style={{borderRadius:'20px',marginRight:'1rem'}} active>{">"} </Button>
</div>
<Container fluid style={{marginLeft:'3rem'}}> 
 <Row className='scroll-row'>
  <Col xs={12} sm={6} md={4} lg={4}>
  <Card style={{ width: '37rem', position: 'relative' }}>
    <Card.Img variant="top" src={img33} style={{ objectFit: 'cover' }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
 <Card.Text style={{ color: 'white' }}>Member Product</Card.Text>
      <Card.Title style={{ color: 'white' }}>Your Exclusive Access</Card.Title>
      <Button variant="light">Shop</Button>
    </div>
  </Card>
</Col>
<Col xs={12} sm={6} md={4} lg={4}>
  <Card style={{ width: '37rem', position: 'relative' }}>
    <Card.Img variant="top" src={img34} style={{ objectFit: 'cover' }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
    <Card.Text style={{ color: 'white' }}>Nike By You</Card.Text>
      <Card.Title style={{ color: 'white' }}>Your Customization Service</Card.Title>
      <Button variant="light">Customise</Button>
    </div>
  </Card>
</Col>
<Col xs={12} sm={6} md={4} lg={4}>
  <Card style={{ width: '37rem', position: 'relative' }}>
    <Card.Img variant="top" src={img35} style={{ objectFit: 'cover' }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
    <Card.Text style={{ color: 'white' }}>Member Rewatds</Card.Text>
      <Card.Title style={{ color: 'black' }}>How We Say THank You</Card.Title>
      <Button variant="light">Celebrate</Button>
    </div>
  </Card>
</Col>
<Col xs={12} sm={6} md={4} lg={4}>
  <Card style={{ width: '37rem', position: 'relative' }}>
    <Card.Img variant="top" src={img36} style={{ objectFit: 'cover' }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
    <Card.Text style={{ color: 'white' }}>Member Days</Card.Text>
      <Card.Title style={{ color: 'black' }}>A Celebration Of You</Card.Title>
      <Button variant="light">Learn More</Button>
    </div>
  </Card>
</Col>
<Col xs={12} sm={6} md={4} lg={4}>
  <Card style={{ width: '37rem', position: 'relative' }}>
    <Card.Img variant="top" src={img37} style={{ objectFit: 'cover' }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
    <Card.Text style={{ color: 'white' }}>Sport & Wellness App</Card.Text>
      <Card.Title style={{ color: 'black' }}>Movement Where You Are</Card.Title>
      <Button variant="light">Shop</Button>
    </div>
  </Card>
</Col>
<Col xs={12} sm={6} md={4} lg={4}>
  <Card style={{ width: '37rem', position: 'relative' }}>
    <Card.Img variant="top" src={img38} style={{ objectFit: 'cover' }} />
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
    <Card.Text style={{ color: 'white' }}>SNKRS</Card.Text>
      <Card.Title style={{ color: 'white' }}>Your Ultimate Sneaker Community</Card.Title>
      <Button variant="light">Explore</Button>
    </div>
  </Card>
</Col>
  </Row>
</Container>
{/* footer************** */}

<Container  >
          <Row style={{marginLeft:'5rem',marginTop:'2rem'}}>
            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 >Icons</h5>

              <ul className='list-unstyled mb-0' >
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Air Force 1
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Huarache
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Air Max 90
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Air Max 95
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 >Shoes</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    All Shoes
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Custom Shoes
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Jordan Shoes
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Running Shoes
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 >Clothing</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    All Clothing
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Modest Wear
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Hoodies & Pullovers
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Shirts & Tops
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 >Kids'</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Infant & Toddler Shoes
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Kids' Shoes
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Kids' Jordan Shoes
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-black'>
                    Kids' Basketball Shoes
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        
      </Container>

      {/* footer****8 next part */}


      <section className=''>
        <Container fluid className='text-center text-md-start mt-5' style={{backgroundColor:'black',color:'white'}}>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                FIND A STORE
              </h6>
              <h6 className='text-uppercase fw-bold mb-4'>
                BECOME A Member
              </h6>
              <p>
                Send Us Feedback
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>HELP</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Get Help
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Order Status
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Delivery
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Returns
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Payment OPtions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us On NIke.com Inquiries
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Contact Us On All Other Inquiries
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Nike
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  News
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Investors
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sustainability
                </a>
              </p>
            </Col>
            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'> <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div></h6>
              
            </Col>
           
          </Row>
        </Container>
      </section>
      
       
   </>
  );
}

export default App;
