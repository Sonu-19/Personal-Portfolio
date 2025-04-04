import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const common = {
        marginRight: 15,
        fontSize: 17,
        letterSpacing: ".5px"
    }

    return (
        <>
            <Navbar>
                <Container>
                    <div className="hamburgur">
                        <h2 className='mt-2 h2_right'>
                            <NavLink to="/" style={{ textDecoration: "none" }}>Sonu Kumar</NavLink>
                        </h2>
                        <i className="fa fa-bars inner" onClick={handleShow} aria-hidden="true" style={{ cursor: "pointer" }}></i>
                    </div>

                    <Nav className="nav">
                        <div className='mt-2'>
                            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                            <NavLink to="/projects" className="text-decoration-none" style={common}>Projects</NavLink>
                            <NavLink to="/skills" className="text-decoration-none" style={common}>Skills</NavLink>
                            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
                        </div>
                    </Nav>
                </Container>

                {/* Side bar */}
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='side_nav' onClick={() => setShow(false)}>
                            <NavLink to="/" className="text-decoration-none mb-2" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none mb-2" style={common}>About</NavLink>
                            <NavLink to="/projects" className="text-decoration-none mb-2" style={common}>Project</NavLink>
                            <NavLink to="/skills" className="text-decoration-none mb-2" style={common}>Skills</NavLink>
                            <NavLink to="/contact" className="text-decoration-none mb-2" style={common}>Contact</NavLink>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}

export default Header;