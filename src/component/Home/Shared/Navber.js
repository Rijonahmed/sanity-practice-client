import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../../Lib/Client';

const Navber = () => {
  const [logo, setLogo] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type == "logo"] {
        logoImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
      
      }`
    )
      .then((data) => {
        setLogo(data);
        console.log(data)
      })
      .catch(console.error);

  }, [])




  const manuItem = <>
    <li><Link to='/overview'>Overview</Link></li>
    <li><Link to='/specials'>Specials</Link></li>
    <li><Link to='/gallery'>Gallery</Link></li>
    <li><Link to='/rooms'>Rooms</Link></li>
    <li><Link to='/owners'>Owners</Link></li>
    <li><Link to='/contact'>Contact</Link></li>


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
          <Link className="w-36" to='/' ><span className=''><img src={logo[0]?.logoImage.asset.url} alt="logo" /></span></Link>
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