import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { proyectos } from "../data/proyectos";
import styles from '../styles/projectsLayout.module.css';
import { useEffect } from "react";

function ProjectDetail() {
    const { id } = useParams();
    const projectId = parseInt(id.split('-')[0]);
    const proyecto = proyectos.find(p => p.id === projectId);

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

        const titleElements = document.querySelectorAll(`.${styles.h2About}`);
        titleElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    if (!proyecto) {
        return (
            <Container className="text-white mt-5">
                <h2>Proyecto no encontrado</h2>
                <Link to="/proyectos" className="btn btn-info">Volver a la lista</Link>
            </Container>
        );
    }

    return (
        <div>
            <h2 className={`d-block ${styles.h2About} text-center ${styles.text} text-white`}>{proyecto.titulo}</h2>
        </div>
    )
}

export default ProjectDetail