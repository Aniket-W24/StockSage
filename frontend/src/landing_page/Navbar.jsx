import React from "react"
import { Link } from "react-router-dom"


export default function Navbar(){
    return (
<nav className="navbar navbar-expand-lg sticky-top border-bottom bg-white mb-5">
  <div className="container">
    <Link className="navbar-brand" to="/">
        <img src="media/images/zerodha_logo.svg" style={{width: "25%"}}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex me-0" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li className="nav-item">
          <Link className="nav-link ms-4" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link ms-4" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-4" aria-current="page" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-4" aria-current="page" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-4" aria-current="page" to="/support">Support</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-4" aria-current="page" to="/"><i class="fa-solid fa-bars"></i></Link>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
    )
}