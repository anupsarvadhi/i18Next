import React, { useState } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import i18n from 'i18next'
import '../translation/i18n'
import Home from './Home'
import Blog from './Blog'

const Header = () => {
  const [show, setShow] = useState(true)
  const languageSubmit = (lang) => {
    localStorage.setItem('language', JSON.stringify(lang))
    const data = JSON.parse(localStorage.getItem('language'))
    i18n.changeLanguage(data)
  }
  const showHome = () => {
    setShow(true)
  }
  const showBlog = () => {
    setShow(false)
  }

  return (
    <div>
      <Navbar className="nav-bg" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="logo">
            i18next
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-link">
              <Nav.Link className="list-menu" onClick={() => showHome()}>
                Home
              </Nav.Link>
              <Nav.Link className="list-menu" onClick={() => showBlog()}>
                Blog
              </Nav.Link>
              <NavDropdown
                title="Language"
                id="basic-nav-dropdown"
                className="dropdown"
              >
                <NavDropdown.Item href="/" onClick={() => languageSubmit('en')}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item href="/" onClick={() => languageSubmit('zh')}>
                  Chiness
                </NavDropdown.Item>
                <NavDropdown.Item href="/" onClick={() => languageSubmit('es')}>
                  Spenish
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show && <Home />}
      {!show && <Blog />}
    </div>
  )
}

export default Header
