import { Outlet } from 'react-router-dom';
import styles from '../styles/projectsLayout.module.css';
import { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id={styles.projects}>
            <div className={`m-auto ${styles.mySizeAbout}`}>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    )
}

export default Projects;