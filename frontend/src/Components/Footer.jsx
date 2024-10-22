import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<footer className="bg-light text-center text-lg-start">

  <div className="container p-4">
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text" style={{fontFamily: "Playwrite GB S, cursive", fontWeight: "bold", fontSize: "32px"}}>FantasticFour</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam veniam, mollitia, quae iure ipsum sunt sed numquam suscipit placeat, praesentium saepe.
        </p>
      </div>

      <div>

      <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links</h5>
        <ul className="list-unstyled mb-0">
          <li><Link to="/" className="text-dark">Home</Link></li>
          <li><Link to="/contact" className="text-dark">Contact</Link></li>
          <li><Link to="/about" className="text-dark">About</Link></li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
        <h5 className="text-uppercase mt-1">Follow Us</h5>
        <ul className="list-unstyled mb-0">
          <li><a target='_blank' href="#" className="text-dark">Facebook</a></li>
          <li><a target='_blank' href="#" className="text-dark">Instagram</a></li>
          <li><a target='_blank' href="#" className="text-dark">Twitter</a></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contact Us</h5>
        <p>
          123 Zen Street, Peace City, PC 45678<br />
          Email: contact@fantastic4.com<br />
          Phone: +123 456 7890
        </p>
      </div>
    </div>
  </div>

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2024 FantasticFour. All rights reserved.
  </div>
  </div>
</footer>
  )
}

export default Footer;