import React from 'react'
import { Link } from 'react-router-dom';
import eye from '../assets/myface.jpeg'
import Website from '../assets/web.jpg'
import message from '../assets/message.png'
import send from '../assets/send.png'
import github from '../assets/github.png'


const Projects = () => {
    const handleButtonClick = () => {
        window.open('https://drive.google.com/file/d/1_LROA-GYnT5nEXbf0faeMntRdMSRX0ws/view?usp=sharing', '_blank');
      };
  return (
    <div>
      <div className='container mt-4'>
      <h1 className='logo'><Link to='/' className='text-decoration-none text-light'>LEEWHY</Link></h1>
    <hr className='text-light' />
      <div className='row justify-content-between'>
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
        <div><Link onClick={handleButtonClick}  className='text-decoration-none text-light'>02----Resume</Link></div>
        <hr />
        <div><Link to='/Contacts'  className='text-decoration-none text-light'>03----Contacts</Link></div>
        <hr />
     </div>
     <div className='d-flex align-items-center mt-5 gap-3'>
    <Link className='text-decoration-none d-none d-lg-block'><img src={eye} alt={eye} className='img-fluid img' /></Link>
    <div className='d-flex gap-3'>
    <Link to="mailto:odutayoayomide85@gmail.com" className='d-flex align-items-center gap-1 text-decoration-none text-light'>
        <img src={message} alt=""className='img-fluid lod' />
        <p className='pt-3'>Email Me</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
    <Link to="https://github.com/leewhy05" target='blank' className='d-flex align-items-center gap-1 text-decoration-none text-light'>
    <img src={github} alt=""className='img-fluid lod' />
        <p className='pt-3'>GitHub</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
    </div>

    </div>
 </div> 
 <div className='col-lg-6 mt-5' style={{backgroundColor:"#2D2D2D"}}>
     <div className='d-lg-flex justify-content-between' >
     <div style={{backgroundColor:"#404040"}} className='shadow-sm mt-3 pt-2 jum ps-4'>
     <p className='text-danger'>React, Javascripts, Nodejs</p>
     <h3 className='text-light'>REAL ESTATE - <br />BETA_HOUSE <br /> Website</h3>
     <div className='d-flex gap-3 mt-5'>
     <Link to="https://real-estate-ivory.vercel.app" target='blank' className='d-flex align-items-center gap-1 text-decoration-none text-light'>
        <img src={Website} alt=""className='img-fluid lod' />
        <p className='pt-3'>website</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
    <Link to='https://github.com/leewhy05/real-estate' target='blank' className='d-flex align-items-center gap-1 text-decoration-none text-light'>
    <img src={github} alt=""className='img-fluid lod' />
        <p className='pt-3'>GitHub</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
     </div>
     </div>
     <div className='' >
     <div style={{backgroundColor:"#404040"}} className='mt-3 pt-2 jum ps-4'>
     <p className='text-danger'>React, Javascripts, Nodejs</p>
     <h3 className='text-light'>Jazzy Burger - <br />E-commerce <br /> Website</h3>
     <div className='d-flex gap-3 mt-5'>
     <Link to="https://jazzy-seven.vercel.app" target='blank' className='d-flex align-items-center gap-1 text-decoration-none text-light'>
        <img src={Website} alt=""className='img-fluid lod' />
        <p className='pt-3'>website</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
    <Link to='https://github.com/leewhy05/jazzy' target='blank' className='d-flex align-items-center gap-1 text-decoration-none text-light'>
    <img src={github} alt=""className='img-fluid lod' />
        <p className='pt-3'>GitHub</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
     </div>
     </div>
     </div>
     
     </div>
     <div className='d-lg-flex justify-content-between' >
     <div style={{backgroundColor:"#404040"}} className='shadow-sm mt-3 pt-2 jum ps-4'>
     <p className='text-danger'>React, Javascripts, Nodejs</p>
     <h3 className='text-light'>YOUR GOAL - <br />BLOG <br /> Website</h3>
     <div className='d-flex gap-3 mt-5'>
     <Link to="https://userrolefront-xfje.vercel.app" target='blank' className='d-flex align-items-center gap-1 text-decoration-none text-light'>
        <img src={Website} alt=""className='img-fluid lod' />
        <p className='pt-3'>website</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
    <Link to='https://github.com/leewhy05/userrolefront' target='blank' className='d-flex align-items-center gap-1 text-decoration-none text-light'>
    <img src={github} alt=""className='img-fluid lod' />
        <p className='pt-3'>GitHub</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
     </div>
     </div>
     <div className='' >
     <div style={{backgroundColor:"#404040"}} className='mt-3 pt-2 jum ps-4'>
     <p className='text-danger'>React, Javascripts</p>
     <h3 className='text-light'>LEEWHY - <br />E-commerce <br />Website</h3>
     <div className='d-flex gap-3 mt-5'>
     <Link to="https://shoppingmall-zeta.vercel.app" target='blank' className='d-flex align-items-center gap-1 text-decoration-none text-light'>
        <img src={Website} alt=""className='img-fluid lod' />
        <p className='pt-3'>website</p>
        <img src={send} alt="" className='img-fluid lod' />
    </Link>
    <Link to='https://github.com/leewhy05/projectone' target='blank' className='d-flex align-items-center gap-1 text-decoration-none text-light'>
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
      </div>
    </div>
  )
}

export default Projects