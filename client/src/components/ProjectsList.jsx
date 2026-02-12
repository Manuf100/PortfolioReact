import { proyectos } from '../data/proyectos';
import ProyectoCard from './ProyectoCard';
import styles from '../styles/projectsLayout.module.css';

import { useState, useEffect } from 'react';

function ProjectList() {
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

    const [filtro, setFiltro] = useState("Todos");

    const proyectosFiltrados = filtro === 'Todos'
        ? proyectos
        : proyectos.filter(p => p.categoria.includes(filtro));

    return (
        <div>
            <div>
                <h2 className={`d-block ${styles.h2About} text-center ${styles.text} text-white`}>PROYECTOS</h2>
                <p className={`text-white ${styles.text} ${styles.pText} ${styles.pAbout}`}>Acá encontrarás una selección de mis trabajos principales. Por razones de confidencialidad y seguridad de datos, algunos repositorios se mantienen privados. Sin embargo, puedes consultar fragmentos de código específicos (Gists) para conocer mi metodología de desarrollo.</p>
            </div>
            <div className={styles.filterContainer}>
                {['Todos', "Sitio Web", "Aplicación web", "Aplicación web PWA", "Aplicación mobile", "Aplicación desktop"].map(cat => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${filtro === cat ? styles.filterBtnActive : ''}`}
                        onClick={() => setFiltro(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className={`row ${styles.aboutContent} ${styles.slideRight}`}>
                {proyectosFiltrados.map(proy => (
                    <ProyectoCard key={proy.id} proyecto={proy}></ProyectoCard>
                ))}
            </div>
        </div>
    )
}

export default ProjectList;
