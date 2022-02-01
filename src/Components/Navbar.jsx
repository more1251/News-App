import React  from 'react'
// import PropTypes from 'prop-types'
// import db from '../images/db.png'
import { Link} from "react-router-dom";


const Navbar = () =>{
   return (
    <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src='images/db.png' style={{marginRight: '25px'}} alt="" width="80" height="70" className="d-inline-block align-text-top" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Bugle-Home</Link>
                </li>

                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>

                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>


            </ul>

            </div>
        </div>
    </nav>
    </div>
   )
}



export default Navbar

