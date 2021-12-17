import React from "react";
import { House } from "react-bootstrap-icons";

const Nav = () => {
    return (

        <nav id="nav" className="navbar sticky-top navbar-expand-md navbar-dark bg-primary">
            <div className="container-fluid nav-font">
                <a className="navbar-brand" href={"#hello"}><House /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExpand" aria-controls="navbarExpand" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarExpand">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href={"#about"}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#skills"}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#projects"}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#contact"}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
            </div>
        </nav>

    )
};

export default Nav;