import styles from '../styles/admin.module.css';
import styles2 from '../styles/ProjectAdmin.module.css';
import { useEffect } from 'react';
import { proyectos } from '../data/proyectos';
import { Link } from 'react-router-dom';


function ProjectAdmin() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.active);
                }
            });
        });

        const hiddenElements = document.querySelectorAll(`.${styles.slideRight}`);
        hiddenElements.forEach(el => observer.observe(el));

        const titleElements = document.querySelectorAll(`.${styles.h2Admin}`);
        titleElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleEdit = (id) => {

    }

    return (
        <section className={styles.admin}>
            <div className={`${styles.mysizeAdmin} ${styles.end} m-auto`}>
                <h2 className={`d-block ${styles.h2Admin} text-center ${styles.text} text-white`}>Proyectos</h2>
            </div>
            <div className={styles2.container}>
                <table className={styles2.table}>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Descripción</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proyectos.map(proyecto => (
                            <tr key={proyecto.id}>
                                <td>{proyecto.titulo}</td>
                                <td>{proyecto.descripcion}</td>
                                <td>
                                    <button className={styles.deleteBtn} onClick={() => handleDelete(proyecto.id)}>Eliminar</button> | <Link to={`/admin/editar-proyecto/${proyecto.id}`} className={styles2.editBtn}>Editar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ProjectAdmin;