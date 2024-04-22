import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jumpman from './images/jumpman.jpg';
import logo from './images/logo.png'
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel component
import { useState, useEffect } from 'react';
import shoe from './images/shoe.png';

function App() {
    const [texts, setTexts] = useState([
    "Move, Shop, Customise & Celebrate With Us. No matter what you feel like doing today, It’s better as a Member. Join Us",
    "Save Up to 40%. Shop All Our New Markdowns"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" style={{ height: '35px' }}>
        <Container>
          <Navbar.Brand href="#home"><img src={jumpman} alt='Logo' width='30px' height='30px'></img></Navbar.Brand>
          <Nav className="ms-auto" style={{ fontSize: '12px', fontFamily: 'Helvetica', color: 'black' }}>
            <Nav.Link href="#" style={{ color: 'black' }}>Find a store&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>Help&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>Join Us&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>Sign In </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="bright" data-bs-theme="bright" style={{ height: '60px' }}>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt='Logo1' width='60px' height='30px'></img></Navbar.Brand>
          <Nav className="me-auto" style={{ fontSize: '15px', fontFamily: 'Helvetica' }}>
            <Nav.Link href="#" style={{ color: 'black', marginLeft: '150px' }}>&nbsp;&nbsp;<b>New & Featured</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Men</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Women</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Kids</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Sales</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Customise</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>SNKRS</b></Nav.Link>
            <Form bg='light' style={{ marginLeft: '4px' }}>
              <input class="search" type="search" placeholder="Search" style={{ borderRadius: '200px' }}></input>
            </Form>
            <Nav.Link href="#" style={{ color: 'black', marginLeft: '10px' }}><i class="fa-regular fa-heart"></i></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black', marginLeft: '10px' }}><i class="fa-solid fa-bag-shopping"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='carousel bg-light' style={{fontSize:'15px'}}>
      <Carousel controls={false} indicators={false} interval={3000} pause={false} >
        {texts.map((text, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-item-text text-center">
              {text.split('.').map((sentence, idx) => (
                <p key={idx}>{sentence.trim()}</p>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      <div>
        <img src={shoe} width='1320px' height='600px'></img>
      </div>
    </div>
  );
}

export default App;


input.search {
  width: 180px;
  height: 40px;
  border: 1px solid grey;
  display: block;
  padding: 9px 4px 9px 40px;
  background-color: rgb(61, 54, 54);
  background: transparent url("/src/images/icon.png") no-repeat 13px;
}

