import styles from '../styles/admin.module.css';
import { useEffect, useState } from 'react';

function Comentarios() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        const apiUrl = import.meta.env.VITE_API_URL || '';
        fetch(`${apiUrl}/api/comments`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setComments(data);
                } else {
                    console.error("Respuesta inesperada:", data);
                    if (data && data.error) alert("Error de sesión: " + data.error);
                }
            })
            .catch(err => console.error("Error cargando comentarios", err))
            .finally(() => setLoading(false));
    }, []);

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

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de eliminar este comentario?")) {
            const token = localStorage.getItem('adminToken');
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const res = await fetch(`${apiUrl}/api/comments/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                setComments(comments.filter(c => c.id !== id));
            } else {
                alert("Hubo un error al eliminar el comentario.");
            }
        }
    };

    return (
        <section className={styles.admin}>
            <div className={`${styles.mysizeAdmin} ${styles.end} m-auto`}>
                <h2 className={`d-block ${styles.h2Admin} text-center ${styles.text} text-white`}>Comentarios</h2>
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Mensaje</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan="6" className={`${styles.text} text-center text-white p-3`}>Cargando comentarios...⏳</td></tr>
                        ) : comments.length === 0 ? (
                            <tr><td colSpan="6" className={`${styles.text} text-center text-white p-3`}>No hay comentarios aún.</td></tr>
                        ) : (
                            comments.map(c => (
                                <tr key={c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.nombre}</td>
                                    <td>{c.email}</td>
                                    <td>{c.mensaje}</td>
                                    <td>{new Date(c.created_at).toLocaleDateString()}</td>
                                    <td>
                                        <button className={styles.deleteBtn} onClick={() => handleDelete(c.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Comentarios;