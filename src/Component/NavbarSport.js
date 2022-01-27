import { Container, Nav, Navbar } from "react-bootstrap"

const NavbarSport=()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Hachem</Nav.Link>
                <Nav.Link href="#features">Sahla</Nav.Link>
                <Nav.Link href="#pricing">Sofiene</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarSport