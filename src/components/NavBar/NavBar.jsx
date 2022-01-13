import React from "react";
import "./NavBar.css"
import CartWidget from "./CartWidget";
import { Link} from "react-router-dom";



const NavBar = () => {





    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                    <img className="logo" src='../assets/jpg/libro.jpg' alt="logo-tienda" />
                    </Link>
                    <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="nav-item" to= '/categoria/ciencia-ficcion'>
                            Ciencia Ficcion
                        </Link>
                        <Link className="nav-item" to= '/categoria/fantasia'>
                            Fantasia
                        </Link>
                        </ul>
                    </div>
                </div>
                <Link className="nav-item" to= '/cart'>
                    <CartWidget/>
                </Link>
            </nav>
        </header>
    );
    };

    export default NavBar;
