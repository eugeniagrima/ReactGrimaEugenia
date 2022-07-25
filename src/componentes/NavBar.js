import "./NavBar.css"; 

import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Tazas</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Platos</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Jarrones</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;