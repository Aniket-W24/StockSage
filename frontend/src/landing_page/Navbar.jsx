export default function Navbar(){
    return (
<nav className="navbar navbar-expand-lg sticky-top border-bottom bg-white mb-5">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src="media/images/zerodha_logo.svg" style={{width: "25%"}}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex me-0" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li className="nav-item">
          <a className="nav-link ms-4" aria-current="page" href="#">Signup</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link ms-4" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-4" aria-current="page" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-4" aria-current="page" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-4" aria-current="page" href="#">Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-4" aria-current="page" href="#"><i class="fa-solid fa-bars"></i></a>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
    )
}