import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import krakenLogo from "../../assets/Kraken_logo.png";
import basketIcon from "../../assets/basket-icon.png";

const NavBar = ({ auth }) => {
    let loggedIn = false;

    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand className="nav-logo fs-1" href="/">
                    Option 11
                    <Image src={krakenLogo} rounded fluid className="kraken-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* Empty space between the Navbar*/}
                    </Nav>
                    <Nav className="gap-5 nav-links fs-4">
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={route('products')}>Bikes</NavDropdown.Item>
                            <NavDropdown.Item href={route('clothing')}>Clothing</NavDropdown.Item>
                            <NavDropdown.Item href={route('accessoryProducts')}>
                                Accessories
                            </NavDropdown.Item>
                            <NavDropdown.Item href={route('repairKits')}>Repair Kits</NavDropdown.Item>
                            <NavDropdown.Item href={route('BikeParts')}>Bike Parts</NavDropdown.Item>
                        </NavDropdown>
                        {auth.user ? (
                            <>
                                {" "}
                                <Nav.Link className="px-4" href="/basket">
                                    <Image src={basketIcon} rounded fluid className="basket-icon" />
                                </Nav.Link>
                                <Nav.Link
                                    className="text-black bg-info rounded-2 px-4 "
                                    href="/dashboard"
                                >
                                    My Account
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link
                                className="text-black bg-info rounded-2 px-4 "
                                href="/login"
                            >
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;