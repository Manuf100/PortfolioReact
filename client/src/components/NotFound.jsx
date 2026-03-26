import { Link } from 'react-router-dom';
import styles from '../styles/notfound.module.css';

function NotFound() {
    return (
        <section className={styles.container}>
            <h1 className={`${styles.errorCode} ${styles.slideUp}`}>404</h1>
            <h3 className={`${styles.title} ${styles.slideUp} ${styles.delay1}`}>
                Página No Encontrada
            </h3>
            <p className={`${styles.description} ${styles.slideUp} ${styles.delay2}`}>
                La ruta que estás buscando no existe o el proyecto fue eliminado.
            </p>
            <div className={`${styles.slideUp} ${styles.delay2}`}>
                <Link to="/" className={styles.homeButton}>
                    Volver al Inicio
                </Link>
            </div>
        </section>
    );
}

export default NotFound;