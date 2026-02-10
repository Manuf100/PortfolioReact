import styles from "../styles/sobreMi.module.css";
import { habilidades, caracteristicas, idiomas } from "../data/infoSobreMi.js";
import { useEffect } from "react";

function SobreMi() {
    const nac = 2004;
    const edad = new Date().getFullYear() - nac;

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

    return (
        <section id={styles.about}>
            <div className={` ${styles.mySizeAbout} m-auto `}>
                <div>
                    <h2 className={`d-block ${styles.h2About} text-center ${styles.text} text-white font-weight-bold`}>SOBRE MI</h2>
                </div>
                <div className={` ${styles.aboutContent} row `}>
                    <div className={`col-md-6 ${styles.slideRight}`}>
                        <h3 className={`${styles.text} text-white ${styles.h3About} font-weight-bold`}>¿Quien soy?</h3>
                        <div>
                            <p className={`${styles.text} ${styles.p14}`}>
                                Tengo {edad} años. Nací en la provincia de Salta, Argentina, y actualmente estudio Ingeniería Informática en la Universidad Católica de Salta. Me gusta aprender constantemente y encontrar nuevas formas de aplicar lo que estudio.
                            </p>
                            <p className={`${styles.text} ${styles.p14}`}>
                                Disfruto trabajar en proyectos pequeños que me permitan practicar y mejorar mis conocimientos. Aunque actualmente estoy más enfocado en el desarrollo front-end, también tengo nociones de back-end. Mi mayor motivación es ver cómo una idea toma forma y se convierte en algo funcional y útil.
                            </p>
                            <p className={`${styles.text} ${styles.p14}`}>
                                Soy una persona tranquila, perseverante y detallista. Me gusta aprender de los errores, trabajar con objetivos claros y mantener siempre una actitud positiva. Disfruto ayudar a los demás, compartir lo que sé y aportar con lo que puedo en cada proyecto o equipo del que formo parte.
                            </p>
                            <p className={`${styles.text} ${styles.p14}`}>
                                Actualmente estoy aprendiendo lo básico de Flutter y Dart, con el objetivo de adquirir conocimientos en desarrollo móvil y poder crear aplicaciones simples por mi cuenta.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className={`${styles.skills} col-md-5 ${styles.slideRight}`}>
                        <Cosas name="HABILIDADES" array={habilidades} />
                        <Cosas name="CARACTERÍSTICAS PERSONALES" array={caracteristicas} />
                        <Cosas name="IDIOMAS" array={idiomas} idioma={true} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreMi;

function Cosas({ name, array, idioma }) {
    return (
        <div>
            <h3 className={`text-white ${styles.text} ${styles.h3About} font-weight-bold`}>{name}</h3>
            <div className="d-flex flex-wrap">
                {array.map((item) => (
                    <div className={`${styles.divSkills} bg-info`} key={item.id}>
                        {item.name} {idioma && item.nivel ? <span>- {item.nivel}</span> : null}
                    </div>
                ))}
            </div>
        </div>
    )
}