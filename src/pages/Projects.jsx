import React from 'react'
import { Link } from 'react-router-dom';
import eye from '../assets/myface.jpeg'
import message from '../assets/message.png'
import send from '../assets/send.png'
import github from '../assets/github.png'


const Projects = () => {
  return (
    <div>
      <div className='container mt-4'>
      <h1 className='logo'><Link to='/' className='text-decoration-none text-light'>LEEWHY</Link></h1>
    <hr className='text-light' />
      <div>
      <div className='text-light space mt-5 col-lg-5'>
     <div className='spac'>
         <h5 className='bod border boader-3 mb-4 '>Full Stack Developer</h5>
     </div>
     <div>
         <h2 className='mb-4'>ODUTAYO AYOMIDE T</h2>
         <p className='mb-4'>I'm a Web Development Engineer specialized in crafting exceptional digital experiences.
From implementing user interfaces to optimizing backend systems, I take pride in delivering top-notch web sites that exceeds expectations 🚀</p>
     </div>
     <div className='fs-4 row'>
        <div><Link to='/Projects'  className='text-decoration-none text-light'>01----Projects</Link></div>
        <hr />
        <div><Link  className='text-decoration-none text-light'>02----Resume</Link></div>
        <hr />
        <div><Link to='/Contacts'  className='text-decoration-none text-light'>03----Contacts</Link></div>
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
      </div>
      </div>
    </div>
  )
}

export default Projects