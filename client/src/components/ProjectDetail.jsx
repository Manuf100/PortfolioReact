import { Carousel, Container, Modal } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { proyectos } from "../data/proyectos";
import styles from '../styles/projectsLayout.module.css';
import { useEffect, useState } from "react";

function ProjectDetail() {
    const { id } = useParams();
    const projectId = parseInt(id.split('-')[0]);
    const proyecto = proyectos.find(p => p.id === projectId);

    // State for Modal
    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClose = () => setShowModal(false);
    const handleShow = (index) => {
        setSelectedIndex(index);
        setShowModal(true);
    };

    const handleSelect = (selectedIndex) => {
        setSelectedIndex(selectedIndex);
    };

    const getImageUrl = (name) => {
        return new URL(`../assets/img/${name}`, import.meta.url).href;
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.active);
                }
            });
        });

        const hiddenElements = document.querySelectorAll(`.${styles.slideRight}`);
        hiddenElements.forEach((el) => observer.observe(el));

        const titleElements = document.querySelectorAll(`.${styles.projectTitle}`);
        titleElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    if (!proyecto) {
        return (
            <Container className="text-white mt-5 text-center">
                <h2>Proyecto no encontrado</h2>
                <Link to="/proyectos" className="btn btn-info mt-3">Volver a la lista</Link>
            </Container>
        );
    }

    return (
        <Container className={styles.detailContainer}>
            {/* Header with Back Button and Scaled Title */}
            <div className={styles.headerDetail}>
                <Link to="/proyectos" className={styles.backBtn}>
                    <span>&#8592;</span> Volver
                </Link>
                <h2 className={styles.projectTitle}>{proyecto.titulo}</h2>
            </div>

            <div className="row">
                {/* Left Column: Carousel/Images */}
                <div className="col-lg-6 mb-4">
                    <div className={styles.detailCard}> {/* Reusing card style or just image wrapper */}
                        <Carousel interval={3000} className={styles.carouselContainer} activeIndex={showModal ? undefined : selectedIndex} onSelect={!showModal ? handleSelect : undefined}>
                            {proyecto.imagenes.map((img, index) => (
                                <Carousel.Item key={index} onClick={() => handleShow(index)} style={{ cursor: 'pointer' }}>
                                    <img
                                        className={`d-block w-100 ${styles.imgProject} img-fluid`}
                                        src={getImageUrl(img)}
                                        alt={`${proyecto.titulo} slide ${index}`}
                                        style={{ height: '400px', objectFit: 'contain', backgroundColor: '#2b3035' }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <p className="text-center text-white mt-2" style={{ opacity: 0.7, fontSize: '10px' }}>(Click en la imagen para ampliar)</p>
                    </div>
                </div>

                {/* Right Column: Project Info (Glass Box) */}
                <div className="col-lg-6 mb-4">
                    <div className={styles.glassBox}>
                        <div className="mb-4">
                            <h4 className={styles.metalabel}>Descripción</h4>
                            <div className={styles.metaValue}>
                                {proyecto.descripcion}
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className={styles.metalabel}>Categorías</h4>
                            <div className={styles.metaValue}>
                                {proyecto.categoria.join(", ")}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4 className={styles.metalabel}>Fecha</h4>
                            <div className={styles.metaValue}>
                                {proyecto.fechaInicio} - {proyecto.fechaFin}
                            </div>
                        </div>

                        <div>
                            <h4 className={`${styles.metalabel} mb-4`}>Tecnologías</h4>
                            <div className="d-flex flex-wrap mt-2">
                                {proyecto.tecnologias.map((tech, index) => (
                                    <span key={index} className={styles.techPill}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Links */}
                        {(proyecto.github || proyecto.web || proyecto.playStore) && (
                            <div className="mt-4">
                                <h4 className={`${styles.metalabel} mb-4`}>Enlaces</h4>
                                <div className="d-flex flex-wrap gap-3 mt-2">
                                    {proyecto.github && (
                                        <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                            <i className="fa-brands fa-github fa-lg"></i> GitHub -
                                            (Fragmentos de codigos)
                                        </a>
                                    )}
                                    {proyecto.web && (
                                        <a href={proyecto.web} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                            <i className="fa-solid fa-globe fa-lg"></i> Visitar Web
                                        </a>
                                    )}
                                    {proyecto.playStore && (
                                        <a href={proyecto.playStore} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                            <i className="fa-brands fa-google-play fa-lg"></i> Play Store
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Row: Description */}
            <div className="row mt-2">
                <div className="col-12">
                    <div className={styles.glassBox}>
                        <h3 className={styles.metalabel}>Descripción del Proyecto</h3>
                        <p className={`${styles.descriptionProject} mt-3 text-white`}>
                            {proyecto.detalleLargo}
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal for Image Preview */}
            <Modal show={showModal} onHide={handleClose} centered size="lg" className="modal-dark">
                <Modal.Body style={{ backgroundColor: '#2b3035', padding: 0, border: 'none' }}>
                    <Carousel activeIndex={selectedIndex} onSelect={handleSelect} interval={null}>
                        {proyecto.imagenes.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={getImageUrl(img)}
                                    alt={`Slide ${index}`}
                                    style={{ maxHeight: '80vh', objectFit: 'contain' }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default ProjectDetail