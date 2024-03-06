import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function MenuNav() {
  return (
    <Navbar expand="md" className="bg-white shadow">
      <Container>
        <Navbar.Brand href="#" className='fw-bolder'>king Ityaly Tours</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-center h5" dir="rtl">
            <Nav.Link><Link to="/">الجولات السياحية</Link></Nav.Link>
            <Nav.Link><Link to="/موضوعات عن السياحة فى ايطاليا"> موضوعات عن السياحة</Link></Nav.Link>
            <Nav.Link><Link to="/about king italy tours">من نحن</Link></Nav.Link>
            <NavDropdown title="خدماتنا" id="basic-nav-dropdown">
              <NavDropdown.Item>
              <Link onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}}>جولة سياحية فى ايطاليا</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}}>جولة سياحية فى ميلانو</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link onClick={()=>{window.open('https://wa.me/393248708348?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A8%D9%83%0A%D9%84%D8%A7%20%D8%AA%D8%AA%D8%B1%D8%AF%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%86%D8%A7%20%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B2%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A3%D9%88%20%D9%84%D8%AD%D8%AC%D8%B2%20%D8%B1%D8%AD%D9%84%D8%AA%D9%83%20%D8%A8%D8%B1%D9%81%D9%82%D8%A9%20%D8%B3%D8%A7%D8%A6%D9%82%20%D8%B9%D8%B1%D8%A8%D9%8A%20%D9%81%D9%8A%20%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7!','_blank')}}>جولة سياحية فى روما</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNav;



