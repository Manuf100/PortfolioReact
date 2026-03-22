import { useNavigate } from 'react-router-dom';
import styles from '../styles/admin.module.css';
import Comentarios from './comentarios';
import ProjectAdmin from './PrrojectAdmin';
import ProyectAdmin from './PrrojectAdmin';

function Admin() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/');
    };

    return (
        <section>
            <Comentarios />
            <ProjectAdmin />
            <button
                onClick={handleLogout}
                style={{
                    backgroundColor: 'red', color: 'white', padding: '10px 20px',
                    border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '50px'
                }}
            >
                Cerrar Sesión
            </button>
        </section>
    );
}

export default Admin;
