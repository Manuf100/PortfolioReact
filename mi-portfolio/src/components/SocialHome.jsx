import styles from "../styles/socialHome.module.css";
import github from "../assets/svg/github-dark.svg";
import instagram from "../assets/svg/instagram.svg";
import mail from "../assets/svg/email-svgrepo-com.svg";

function SocialHome() {
    return (
        <div id={styles.social}>
            <SocialLink link="https://github.com/Manuf100" icono={github} />
            <SocialLink link="https://www.instagram.com/_manufigue?igsh=MjVtazI5NTQ1dmQ4" icono={instagram} full />
            <SocialLink link="mailto:manufigueroa169@gmail.com?subject=Conulta%20desde%20portfolio" icono={mail} full />
        </div>
    );
}

export default SocialHome;

function SocialLink({ link, icono, full = false }) {
    return (
        <div className={styles.socialDiv}>
            <a href={link} className={styles.icono} target="_blank">
                <img src={icono} alt="icono" width={full ? "100%" : "auto"} />
            </a>
        </div>
    );
}