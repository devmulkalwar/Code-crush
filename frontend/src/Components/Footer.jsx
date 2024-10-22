import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaHome, FaQuestion, FaAddressBook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start" style={{marginTop: '2.5rem'}}>
      <div className="container p-4">
        {/* Links */}
        <div className="row">
          {/* Column 1 */}
          <div className="col-lg-4 col-md-12 col-md-12 mb-4 mb-md-0">
            <h5 className="text" style={{ fontWeight: 'bold', fontFamily: 'Playwrite GB S, cursive', fontSize: '32px'}}>Fastastic4</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis inventore explicabo ab nobis sed eius, at laboriosam magni laborum? <br />
            </p>
          </div>
          <span className='col-lg-2' />
    
          {/* Column 2 */}
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/" className="text-dark">Home</Link></li>
              <li><Link to="/about" className="text-dark">About</Link></li>
              <li><Link to="/contact" className="text-dark">Contact</Link></li>
            </ul>
          </div>
    
          {/* Column 3 */}
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled mb-0" style={{textDecoration: 'none'}}>
              <li><a href="#" target='_blank' className="text-dark"><FaTwitterSquare /> Twitter</a></li>
              <li><a href="#" target='_blank' className="text-dark"><FaFacebookSquare /> Facebook</a></li>
              <li><a href="#" target='_blank' className="text-dark"><FaInstagramSquare /> Instagram</a></li>
            </ul>
          </div>
    
          {/* Column 4 */}
          <div className="col-lg-2 col-md-12 col-sm-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              123 Zen Street, Peace City, PC 45678<br />
              Email: contact@zensite.com<br />
              Phone: +123 456 7890
            </p>
          </div>
        </div>
        {/* Links end */}
      </div>
    
      {/* Copyright */}
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        © 2024 FantasticFour. All rights reserved.
      </div>
    </footer>
  )}
export default Footer;