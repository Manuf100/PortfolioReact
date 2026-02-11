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
                                Tengo {edad} años. Soy estudiante de Ingeniería Informática en la Universidad Católica de Salta. Me apasiona la tecnología y busco constantemente nuevas formas de aplicar mis conocimientos en soluciones reales.
                            </p>
                            <p className={`${styles.text} ${styles.p14}`}>
                                Mi enfoque principal es el desarrollo Front-End, donde disfruto creando interfaces intuitivas. Paralelamente, estoy expandiendo mis habilidades hacia el Back-End con Node.js, con el objetivo de tener una visión integral del desarrollo web.
                            </p>
                            <p className={`${styles.text} ${styles.p14}`}>
                                Me defino como una persona perseverante y detallista. Valoro el aprendizaje continuo y el trabajo en equipo, siempre buscando aportar valor y crecer junto a mis compañeros.
                            </p>
                            <p className={`${styles.text} ${styles.p14}`}>
                                Más allá del código, disfruto de la naturaleza y las caminatas al aire libre. Participo activamente en el movimiento de Schoenstatt, realizando misiones y actividades solidarias, lo que refuerza mi vocación de servicio y mi compromiso con ayudar a los demás.
                            </p>
                            <p className={`${styles.text} ${styles.p14} font-italic`}>
                                Siempre estoy buscando nuevos desafíos y oportunidades para seguir aprendiendo.
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