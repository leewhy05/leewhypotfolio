import React from 'react'
import '../styles/hero.css'
import { Link } from 'react-router-dom'
import HTML from '../assets/man.png'
import prog from '../assets/program.png'
import eye from '../assets/myface.jpeg'
import message from '../assets/message.png'
import send from '../assets/send.png'
import github from '../assets/github.png'

const Hero = () => {
  return (
    <>
    <div className='container'>
    <hr  className='text-light'/>
    <div className='row justify-content-between align-items-center mt-5'>
        <div className='text-light col-lg-6 space'>
            <div className='spac'>
                <h5 className='bod border boader-3 mb-4 '>Full Stack Developer</h5>
            </div>
            <div>
                <h2 className='mb-4'>ODUTAYO AYOMIDE T</h2>
                <p className='mb-4'>I'm a Web Development Engineer specialized in crafting exceptional digital experiences.
From implementing user interfaces to optimizing backend systems, I take pride in delivering top-notch web sites that exceeds expectations 🚀</p>
             <img src={prog} alt="" className='mt-5 img-fluid' />
            </div>
        </div>
        <div className='col-lg-6'>
        <img src={HTML} alt="" className='img-fluid slide' />
        </div>
    </div>
    <div>
    <div className='d-flex align-items-center gap-3'>
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
    </div>
    </>
  )
}

export default Hero