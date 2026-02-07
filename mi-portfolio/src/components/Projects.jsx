import { Outlet } from 'react-router-dom';
import styles from '../styles/projectsLayout.module.css';
function Projects() {
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