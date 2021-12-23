import React from 'react'
import Container from 'react-bootstrap/Container'  
import { Navbar , Nav } from 'react-bootstrap'
import logo from '../../assets/png/logo512.png'


const NavBarBs = () => {
    return (
        <Navbar>
            <Container>
                <img src={logo} alt="" />
                <Navbar.Brand> NavBar</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#Home"></Nav.Link>
                        <Nav.Link href="#Features"></Nav.Link>
                        <Nav.Link href="#Princing"></Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBarBs
