import React from 'react'

const Header = () => {
  return (
  //   <nav classNameName="navbar navbar-expand-lg bg-body-tertiary" style={style.header}>
  //   <div classNameName="container-fluid">
  //     <a classNameName="navbar-brand" style={style.title} href="/">Fantastic Four</a>
  //     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span classNameName="navbar-toggler-icon"></span>
  //     </button>
  //     <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li classNameName="nav-item">
  //           <a classNameName="nav-link active" aria-current="page" href="/about">About</a>
  //         </li>
  //         <li classNameName="nav-item">
  //           <a classNameName="nav-link" href="/contact">Contact</a>
  //         </li>
  //         <li classNameName="nav-item dropdown">
  //           <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //             Account
  //           </a>
  //           <ul classNameName="dropdown-menu">
  //             <li><a classNameName="dropdown-item" href="/login">Login</a></li>
  //             <li><a classNameName="dropdown-item" href="#">Logout</a></li>
  //             <li><a classNameName="dropdown-item" href="signup">Register</a></li>
  //           </ul>
  //         </li>
  //       </ul>
  //       <form classNameName="d-flex" role="search">
  //         <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  //         <button classNameName="btn btn-outline-success" type="submit">Search</button>
  //       </form>
  //     </div>
  //   </div>
  // </nav> 


<nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <a className="navbar-brand" style={style.title} href="/">FantasticFour</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

const style = {
  title: {
    fontWeight: 'bold',
    FontFamily: 'Playwrite GB S, cursive', 
    fontSize: '32px',
  }
}

export default Header