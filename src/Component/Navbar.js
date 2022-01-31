import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark`}>
                <div className="container-fluid">
                  <a className="navbar-brand" href="#scrollspyCollection">
                    <img className="pading-lf" alt="" src="./sitelogosm.png"/>
                    Mutant Potato
                  </a>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <a className="nav-link nav-color" href="#scrollspyCollection">Collections</a>
                        <a className="nav-link nav-color" href="#scrollspyWhyPotato">Why Potato?</a>
                        <a className="nav-link nav-color" href="#scrollspyRoadmap">Roadmap</a>
                        <a className="nav-link nav-color" href="#scrollspyTeam">Team</a>
                    </ul>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-link">
                            <i className="fa fa-instagram social-icon pr-lg-0"></i>
                        </a>
                        <a href="https://discord.com/invite/" target="_blank" rel="noreferrer" className="social-link">
                            <i className="fa fa-discord-alt social-icon pr-lg-0"></i>
                        </a>
                        <a href="https://twitter.com/MutantPotato2" target="_blank" rel="noreferrer" className="social-link">
                            <i className="fa fa-twitter social-icon pr-lg-0"></i>
                        </a>
                  </div>
                </div>
            </nav> 
        </div>
    )
}

export default Navbar
