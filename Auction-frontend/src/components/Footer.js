import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsLinkedin,BsGithub,BsInstagram,BsYoutube } from 'react-icons/bs';
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'></img>
                <h2 className='mb-0 text-white fs-3' >Subscribe for latest offers</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-1" 
                  placeholder="Enter your email address" 
                  aria-label="Enter your email address" 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe 
                </span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4 '>
              <h4 className='text-white mb-4'>Contact US</h4>
              <div className='footer-links d-flex flex-column'>
                <address className='text-white fs-6'>Gand No:5, Gandeli Nagar,<br /> Dick Hole
                  Near Ganja Nagri <br /> Pincode: 696969  
                </address>
                <a href='tel: +91 69696969' 
                className='mt-0 d-block mb-1 text-white'>
                +91 69696969
                </a>
                <a href='mailto: chudakadnumber5@chapri.com' 
                className='mt-2 d-block mb-0 text-white'>
                chudakadnumber5@chapri.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4 '>
                  <a className='text-white fs-4 mt-2' href='#'>
                    <BsLinkedin  />
                  </a>
                  <a className='text-white fs-4 mt-2' href='#'>
                    <BsInstagram />
                  </a>
                  <a className='text-white fs-4 mt-2' href='#'>
                    <BsYoutube  />
                  </a>
                  <a className='text-white fs-4 mt-2' href='#'>
                    <BsGithub  />
                  </a>
                </div>
                  
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1' to="/" >Privacy Policy</Link>
                  <Link className='text-white py-2 mb-1' to='/'>Refund Policy</Link>
                  <Link className='text-white py-2 mb-1'to='/'>Shipping Policy</Link>
                  <Link className='text-white py-2 mb-1'to='/'>Terms & Conditions</Link>
                  <Link className='text-white py-2 mb-1' to='/contact'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1' to="/" >About Us</Link>
                  <Link className='text-white py-2 mb-1' to='/'>Faq</Link>
                  <Link className='text-white py-2 mb-1'to='/'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1' to="/" >Notes</Link>
                  <Link className='text-white py-2 mb-1' to='/'>Home Appliances</Link>
                  <Link className='text-white py-2 mb-1'to='/'>Text Book</Link>
                  <Link className='text-white py-2 mb-1' to='/contact'>Furniture</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}: By Team InCite 
              </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer 