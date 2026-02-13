import styles from '../styles/contacto.module.css'
import { useEffect, useState } from 'react'


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState(null);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedback(null);

        const formData = {
            nombre: name,
            email: email,
            mensaje: message
        };

        try {
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const response = await fetch(`${apiUrl}/api/contacto`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setFeedback({ type: 'success', text: "¡Mensaje enviado con éxito!" });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setFeedback({ type: 'error', text: "Error: " + result.error });
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
            setFeedback({ type: 'error', text: "No se pudo conectar con el servidor." });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id={styles.contacto}>
            <div className={`${styles.mySizeAbout} ${styles.end} m-auto`}>
                <div>
                    <h2 className={`d-block ${styles.h2About} text-center ${styles.text} text-white`}>CONTACTO</h2>
                    <p className={`text-center text-white mb-5 ${styles.text}`} style={{ fontSize: "1.5rem" }}>
                        ¿Tenés una idea en mente o queres colaborar en un proyecto? <br />
                        ¡Escribime! Estoy siempre dispuesto a escuchar nuevas propuestas y desafíos. <br />
                        También podés encontrarme en mis redes sociales aquí abajo.
                    </p>
                </div>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit} className='needs-validation'>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Nombre</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Ingresar un nombre' required className={styles.element} />
                            <div className="valid-feedback">Valido.</div>
                            <div className="invalid-feedback">Por favor complete este campo.</div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ingresar un email' required className={styles.element} />
                            <div className="valid-feedback">Valido.</div>
                            <div className="invalid-feedback">Por favor complete este campo.</div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Mensaje</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Ingresar un mensaje' required className={styles.element} />
                            <div className="valid-feedback">Valido.</div>
                            <div className="invalid-feedback">Por favor complete este campo.</div>
                        </div>
                        <div className={`${styles.btnMain} ${styles.btnForm}`}>
                            <input
                                type="submit"
                                value={loading ? "Cargando..." : "Enviar"}
                                disabled={loading}
                                style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                            />
                        </div>
                    </form>

                    {feedback && (
                        <div
                            className={`alert ${feedback.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3 text-center`}
                            role="alert"
                        >
                            {feedback.text}
                        </div>
                    )}
                </div>
            </div>
            <div className={`${styles.slideRight} ${styles.redes}`}>
                <div className={styles.socialDivContact}>
                    <a href="https://github.com/Manuf100" target="_blank" rel="noopener noreferrer" className={styles.iconoContact}>
                        <i className="fa-brands fa-github"></i> <span>@Manuf100</span>
                    </a>
                </div>
                {/*<div className={styles.socialDivContact}>
                    <a href="https://www.instagram.com/_manufigue?igsh=MjVtazI5NTQ1dmQ4" target="_blank" rel="noopener noreferrer" className={styles.iconoContact}>
                        <i className="fa-brands fa-instagram"></i> <span>@_manufigue</span>
                    </a>
                </div>*/}
                <div className={styles.socialDivContact}>
                    <a href="https://www.linkedin.com/in/manuel-figueroa-6326763b0" target="_blank" rel="noopener noreferrer" className={styles.iconoContact}>
                        <i className="fa-brands fa-linkedin"></i> <span>Manuel Figueroa</span>
                    </a>
                </div>
                <div className={styles.socialDivContact}>
                    <a href="mailto:manufigueroa169@gmail.com?subject=Conulta%20desde%20portfolio" className={styles.iconoContact}>
                        <i className="fa-solid fa-envelope"></i> <span>manufigueroa169@gmail.com</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact