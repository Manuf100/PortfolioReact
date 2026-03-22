import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { proyectos } from '../data/proyectos';
import styles from '../styles/login.module.css';

function ProjectEditAdmin() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Estados para el formulario
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    // Pre-cargar datos del proyecto
    useEffect(() => {
        const proyecto = proyectos.find(p => p.id.toString() === id);
        if (proyecto) {
            setTitulo(proyecto.titulo);
            setDescripcion(proyecto.descripcion);
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Aquí deberás hacer un PUT a tu servidor Node con Supabase
        // usando el token tal cual como lo hicimos en Comentarios:
        /*
        const token = localStorage.getItem('adminToken');
        await fetch(`http://localhost:3001/api/proyectos/${id}`, {
            method: 'PUT',
            headers: { 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ titulo, descripcion })
        });
        */
        
        console.log("Guardando en la API (demo):", { titulo, descripcion });
        alert("¡Proyecto actualizado con éxito! (Falta conectar servidor)");
        navigate('/admin'); // Regresa al admin
    };

    return (
        <section id={styles.login}>
            <div className={`${styles.mySizeLogin} ${styles.end} m-auto`}>
                <div>
                    <h2 className={`d-block ${styles.h2Login} text-center ${styles.text} text-white`}>Editar Proyecto</h2>
                </div>
                {/* Formulario que reusa los estilos de Login */}
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit} className='needs-validation'>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Título</label>
                            <input 
                                type="text" 
                                value={titulo} 
                                onChange={(e) => setTitulo(e.target.value)} 
                                required 
                                className={styles.element}
                            />
                        </div>
                        <div className={styles.formGroup} style={{ marginTop: '15px' }}>
                            <label className={styles.label}>Descripción</label>
                            <textarea 
                                value={descripcion} 
                                onChange={(e) => setDescripcion(e.target.value)} 
                                required 
                                rows="5"
                                className={styles.element}
                            />
                        </div>
                        <div className={`${styles.btnMain} ${styles.btnForm}`} style={{ display: 'flex', gap: '10px' }}>
                            <input type='submit' value="Guardar Cambios" style={{ flex: 1, cursor: 'pointer' }} />
                        </div>
                    </form>
                    {/* Botón para volver sin guardar */}
                    <button 
                        onClick={() => navigate('/admin')}
                        style={{ width: '100%', marginTop: '15px', padding: '10px', background: 'transparent', color: 'white', border: '1px solid white', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProjectEditAdmin;
