import miFoto from '../assets/img/miFoto.jpg';
import styles from '../styles/header.module.css';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container, NavLink} from 'react-bootstrap';

function HeaderComp() {
    return (
        <header className={`${styles.myGradient} fixed-top`}>
            <Navbar expand="lg" variant="dark" className="py-4 px-5">
                <Container fluid className="px-4 px-md-5">
                    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                        <img src={miFoto} alt="Foto de perfil" className={`${styles.brandImg}`} />
                        <span className={`${styles.brandName} ms-2`}>MANUEL FIGUEROA</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavLink as={Link} to="/" className={styles.navLink}>Inicio</NavLink>
                            <NavLink as={Link} to="/proyectos" className={styles.navLink}>Proyectos</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default HeaderComp;