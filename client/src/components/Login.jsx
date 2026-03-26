import { useState, useEffect } from 'react'
import styles from '../styles/login.module.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

        const titleElements = document.querySelectorAll(`.${styles.h2Login}`);
        titleElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const response = await fetch(`${apiUrl}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Error al iniciarr sesion');
                setLoading(false);
                return;
            }
            localStorage.setItem('adminToken', data.token);
            navigate('/admin');
        } catch (err) {
            setError('Error de conexion con el servidor');
            setLoading(false);
        }
    }

    return (
        <section id={styles.login}>
            <div className={`${styles.mySizeLogin} ${styles.end} m-auto`}>
                <div>
                    <h2 className={`d-block ${styles.h2Login} text-center ${styles.text} text-white`}>LOGIN</h2>
                </div>
                <div className={styles.formContainer}>
                    <form onSubmit={handleLogin} className='needs-validation'>
                        <div className={styles.formGroup}>
                            <label htmlFor='email' className={styles.label}>Email</label>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ingresar email' required className={styles.element}></input>
                            <div className="valid-feedback">Valido.</div>
                            <div className="invalid-feedback">Por favor complete este campo.</div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor='password' className={styles.label}>Password</label>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Ingresar password' required className={styles.element}></input>
                            <div className="valid-feedback">Valido.</div>
                            <div className="invalid-feedback">Por favor complete este campo.</div>
                        </div>
                        {error && <p style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '10px' }}>{error}</p>}
                        <div className={`${styles.btnMain} ${styles.btnForm}`}>
                            <input type='submit' value={loading ? "Cargando..." : "Iniciar Sesión"} disabled={loading} style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}></input>
                        </div>
                    </form>

                </div>

            </div>
        </section>
    )
}

export default Login
