import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export function Header() {
    return (
        <>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="О больнице" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Сведения о медицинской организации</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Режим и график работы</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Лицензии</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Отзывы</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Направления" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/4.1">Терапия</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.2">Гинекология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.3">Хирургия</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.4">Урология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.5">Неврология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.6">Оториноларингология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.7">Офтальмоголия</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.8">Стоматология</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing2">Специалисты</Nav.Link>
                            <Nav.Link href="#pricing3">Направления</Nav.Link>
                            <Nav.Link href="#pricing4">Платные услуги</Nav.Link>
                            <Nav.Link href="#features">Контакты</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}