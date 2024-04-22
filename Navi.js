import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '/home/cindra/Desktop/Mainproject/nike/src/img1.png'
import logo2 from '/home/cindra/Desktop/Mainproject/nike/src/limg2.png'
import  logo3 from '/home/cindra/Desktop/Mainproject/nike/src/img3.png';
import logo4 from '/home/cindra/Desktop/Mainproject/nike/src/img5.webp';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel component
import { useState, useEffect } from 'react';
import shoe from './img6.png';
import Button from 'react-bootstrap/Button';
import './Navi.css';



 function Navi() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const sentence1 = 'Save Up to 40%<br/><u>Shop All Our New Markdowns</u>';
  const sentence2 = '<b>Move, Shop, Customise & Celebrate With Us.</b> <br>No matter what you feel like doing today, It’s better as a Member.<br> <u>Join Us</u>';

  const contentList = [
    { text: sentence1},
    { text: sentence2 },
  ];
  return (
    <div>
         <Navbar bg="light" data-bs-theme="light" style={{height:'30px',padding:'1rem'}}>
        {/* <Container fluid  >
        {' '}{' '}<img
              alt="" 
              src={logo2}
              width="30"
              height="30"
              className=""
            />
          <Nav className="ms-auto" style={{fontFamily:'Helvetica'}}>
          <Nav.Link  href="#home" style={{color:'black'}}>Find a Store&nbsp;|</Nav.Link>
          <Nav.Link  href="#home" style={{color:'black'}}>Help &nbsp;|</Nav.Link>
            <Nav.Link href="#home" style={{color:'black'}}>Join Us&nbsp; |</Nav.Link>
            <Nav.Link  href="#home" style={{color:'black'}}>Sign In&nbsp;</Nav.Link>
          </Nav>
        </Container > */}
         <Container fluid>
          <Navbar.Brand href="#home"><img src={logo2} alt='logo' width='27px' height='30px'></img></Navbar.Brand>
          <Nav className="ms-auto" style={{ fontSize: '12px', fontFamily: 'Helvetica' }}>
            <Nav.Link href="#home" style={{ color: "black" }}>Find a store&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#features" style={{ color: "black" }}>Help&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>Join Us&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
      <Navbar  data-bs-theme="light" style={{height:'55px',padding:'1rem'}}>
        <Container fluid  >
        {' '}{' '}<img
              alt="" 
              src={logo1}
              width=""
              height="30"
              className=""
            />
          <Nav className="me-auto" style={{fontFamily:'Helvetica',marginLeft:'35rem'}}>
          <Nav.Link  href="#home" style={{color:'black'}}>New & Featured&nbsp;&nbsp;</Nav.Link>
          <Nav.Link  href="#home" style={{color:'black'}}>Men &nbsp;&nbsp;</Nav.Link>
            <Nav.Link href="#home" style={{color:'black'}}>Women&nbsp;&nbsp; </Nav.Link>
            <Nav.Link  href="#home" style={{color:'black'}}>Kids&nbsp;&nbsp;</Nav.Link>
            <Nav.Link  href="#home" style={{color:'black'}}>Sale&nbsp;&nbsp;</Nav.Link>
            <Nav.Link  href="#home" style={{color:'black'}}>Customize&nbsp;&nbsp;</Nav.Link>
            <Nav.Link  href="#home" style={{color:'black'}}>SNKRS&nbsp;&nbsp;</Nav.Link>

          </Nav>
          <div className="">
          <input type="text"  className='bg-light' placeholder="&#xF002; Search" style={{ fontFamily: 'FontAwesome',marginRight:'4rem',borderRadius:'2rem',padding:'3px'}} />
          </div>  <img
              alt="" 
              src={logo3}
              width="30"
              height="30"
              style={{marginRight:'1rem'}}
              className=""
            />
             <img
              alt="" 
              src={logo4}
              width="30"
              height="30"
              style={{marginRight:'2rem'}}
              className=""
            />
        </Container >
      </Navbar>
   
      
      <div className='demooo bg-light'>
     <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" controls={false} indicators={false}>
      {contentList.map((content, idx) => (
        <Carousel.Item key={idx}>
          <div className="d-block w-100">
            <div className="carousel-text" dangerouslySetInnerHTML={{ __html: content.text }} style={{ textAlign: 'center',border: '1px solid #ccc', padding: '10px',height:'90px' }} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
   </div>
      <div className='shoe1'>
        <img src={shoe} width='1700px' height='auto' style={{marginLeft:'50px'}} ></img>
      </div>
      <div className="text-center">
    <p style={{marginBottom:'-1px',marginTop:'3rem'}}> Feel the Unreal</p>
    <h1 >AIR MAX DN</h1>
    <p style={{marginTop:'1rem'}}>The next generation of Air technology is here</p>
    <Button  style={{borderRadius:'2rem'}} variant="dark">Shop Now</Button>
    </div>
    </div>
   

    
  )
}

export default Navi;

