import miFoto from "../assets/img/miFoto.jpg"
import styles from "../styles/home.module.css"
import { Link } from 'react-router-dom'
import SocialHome from './SocialHome'
import SobreMi from "./sobreMi";

function Home() {
    const nac = 2004;
    const edad = new Date().getFullYear() - nac;
    return (
        <>
            <FirstHome />
            <SobreMi></SobreMi>
        </>
    );
}
export default Home;

function FirstHome() {
    const nac = 2004;
    const edad = new Date().getFullYear() - nac;
    return (
        <section id={styles.mainSection}>
            <div className={styles.intro}>
                <h1 className={`text-center text-white ${styles.text}`}>Manuel Figueroa</h1>
                <div className={`${styles.textDesc} d-flex flex-column align-items-center text-center ${styles.text}`}>
                    <img src={miFoto} alt="foto de perfil" className={`${styles.brandImgHome} mb-4`} />
                    <p className={`${styles.text} text-white ${styles.pText}`}>Tengo {edad} años. Nací en la provincia de Salta, Argentina, y actualmente estudio Ingeniería Informática en la Universidad Católica de Salta.</p>
                </div>
                <div className={styles.btnMain}>
                    <Link to="/proyectos" className={`${styles.btn} btn-info btn-lg d-inline-block ${styles.text}`}>MIS PROYECTOS</Link>
                </div>
            </div>
            <SocialHome />
        </section>
    );
}