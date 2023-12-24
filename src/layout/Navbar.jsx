import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useMatch } from 'react-router-dom';


function NavScrollExample() {

    return (
      <>
      <Navbar expand="lg" className="container mt-4 bg-dar">
        <Container fluid>
          <h1 className='logo'><Link  className='text-decoration-none text-light'>LEEWHY</Link></h1>
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-light' />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
            
            </Nav>
            <div className="d-flex gap-4 lh-base align-items-center ">
              
                <Link className='text-decoration-none text-light'><h5>Projects</h5></Link>
              
              
                <Link className='text-decoration-none text-light'><h5>Resume</h5></Link>
             
              <Link to='/Contacts' className='text-decoration-none text-light'><h5>Contacts</h5></Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr  className='text-light'/>
      </>
    );
  }
  
  export default NavScrollExample;
  