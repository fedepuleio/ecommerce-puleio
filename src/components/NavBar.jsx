import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="./public/index.html">
                Libreria
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
                    <a className="nav-link" aria-current="page" href="./public/index.html">
                    Inicio
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./public/index.html">
                    Promociones
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./public/index.html">
                    Sucursales
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
    };

    export default NavBar;
