import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
  const manuItem = <>
    <li><Link to='/home'>Home</Link></li>
    <li><Link to='/resume'>Resume</Link></li>
    <li><Link to='/about'> About</Link></li>
    <li><Link to='/contactME'>Contact Me</Link></li>
    <li><Link to='/projects'>Projects</Link></li>
    <li><Link to='/education'>Education</Link></li>
    <li><Link to='/blog'>Blog</Link></li>

  </>



  return (

    <div className='sticky top-0 z-10'>
      <div className="navbar bg-cyan-500 text-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">

              {manuItem}

            </ul>
          </div>
          <Link className="" to='/' ><span className=''><img src="https://i.ibb.co/5rY85C2/Logo-Makr-1-TLNhj-1.png" alt="logo" /></span></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {manuItem}

          </ul>
        </div>


      </div>

    </div >

  );
};

export default Navber;