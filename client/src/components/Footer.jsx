import styles from "../styles/footer.module.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Container className="py-5">
                <Row className="gy-4">
                    {/* Brand / About */}
                    <Col md={4} className="text-center text-md-start">
                        <h4 className={styles.footerTitle}>MANUEL FIGUEROA</h4>
                        <p className={styles.footerText}>
                            Estudiante de Ingeniería en Informática apasionado por el desarrollo web y la tecnología.
                        </p>
                    </Col>

                    {/* Quick Links */}
                    <Col md={4} className="text-center">
                        <h4 className={styles.footerTitle}>Enlaces Rápidos</h4>
                        <Nav className="flex-column align-items-center">
                            <Nav.Link as={Link} to="/" className={styles.footerLink}>Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/proyectos" className={styles.footerLink}>Proyectos</Nav.Link>
                            <Nav.Link as={Link} to="/contacto" className={styles.footerLink}>Contacto</Nav.Link>
                        </Nav>
                    </Col>

                    {/* Social / Contact */}
                    <Col md={4} className="text-center text-md-end">
                        <h4 className={styles.footerTitle}>Conecta</h4>
                        <div className={styles.socialIcons}>
                            <a href="https://github.com/manuf100" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaGithub size={24} />
                            </a>
                            {/*<a href="https://www.linkedin.com/in/manue-figueroa/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaLinkedin size={24} />
                            </a>*/}
                            <a href="mailto:tuemail@example.com" className={styles.socialLink}>
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className={styles.footerDivider} />

                <Row>
                    <Col className="text-center">
                        <p className={styles.copyright}>
                            &copy; {currentYear} Manuel Figueroa. Todos los derechos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;