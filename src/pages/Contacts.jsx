import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import eye from '../assets/myface.jpeg'
import message from '../assets/message.png'
import send from '../assets/send.png'
import github from '../assets/github.png'


const Contacts = () => {
  return (
    <div>
      <div className='container mt-4'>
      <h1 className='logo'><Link to='/' className='text-decoration-none text-light'>LEEWHY</Link></h1>
    <hr className='text-light' />
<div>
 <div className='row justify-content-between align-items-center '>
 <div className='text-light space mb-5 col-lg-5'>
     <div className='spac'>
         <h5 className='bod border boader-3 mb-4 '>Full Stack Developer</h5>
     </div>
     <div>
         <h2 className='mb-4'>ODUTAYO AYOMIDE T</h2>
         <p className='mb-4'>I'm a Web Development Engineer specialized in crafting exceptional digital experiences.
From implementing user interfaces to optimizing backend systems, I take pride in delivering top-notch web sites that exceeds expectations 🚀</p>
     </div>
     <div className='fs-4 row'>
        <div className=''><Link  className='text-decoration-none text-light'>01----Projects</Link></div>
        <hr />
        <div><Link  className='text-decoration-none text-light'>02----Resume</Link></div>
        <hr />
        <div><Link  className='text-decoration-none text-light'>03----Contacts</Link></div>
        <hr />
     </div>
     <div className='d-flex align-items-center mt-5 gap-3'>
    <Link className='text-decoration-none d-none d-lg-block'><img src={eye} alt={eye} className='img-fluid img' /></Link>
    <div className='d-flex gap-3'>
    <Link className='d-flex align-items-center gap-1 text-decoration-none text-light'>
        <img src={message} alt=""className='img-fluid lod' />
        <p className='pt-3'>Email Me</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
    <Link className='d-flex align-items-center gap-1 text-decoration-none text-light'>
    <img src={github} alt=""className='img-fluid lod' />
        <p className='pt-3'>GitHub</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
    </div>

    </div>
 </div>
 <div className='col-lg-6 mt-3 pt-3' style={{backgroundColor:"#2D2D2D"}}>
<Form className='text-light'>
<h2>SEND A MESSAGE</h2>
<Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
 <Form.Label>FROM</Form.Label>
 <Form.Control type="email" placeholder="your name" />
</Form.Group>
<Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
 <Form.Label>SUBJECT</Form.Label>
 <Form.Control type="email" placeholder="your purpose" />
</Form.Group>
<Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
 <Form.Label>WRITE A MESSAGE</Form.Label>
 <Form.Control as="textarea" placeholder='write a message and add your email or phone number please' rows={5} />
</Form.Group>
<button className='btn btn-light'>Send a message</button>
</Form>  
</div>
 </div>



</div>

      </div>
    </div>
  )
}

export default Contacts