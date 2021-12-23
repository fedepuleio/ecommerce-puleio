import React from "react";
import "./NavBar.css"
import logo from '../../assets/jpg/libro.jpg'
import { FaCartPlus } from "react-icons/fa";



const NavBar = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="./public/index.html">
                <img className="logo" src={logo} alt="logo-tienda" /> Libreria
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="./public/index.html">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./public/index.html">Nuestros Libros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./public/index.html">Contacto</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./public/index.html"><FaCartPlus/></a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>
    );
    };

    export default NavBar;
