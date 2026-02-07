import styles from '../styles/projectsLayout.module.css';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProyectoCard({ proyecto }) {
    const getImageUrl = (name) => {
        return new URL(`../assets/img/${name}`, import.meta.url).href;
    }
    return (
        <div className='col-md-4 d-flex align-items-strectch mb-4'>
            <Card className={`${styles.card} h-100 d-flex flex-column ${styles.paddingCard}`}>
                <Carousel interval={null} className={`${styles.carouselContainer}`}>
                    {proyecto.imagenes.map((img, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className={`card-img-top ${styles.imgProject} rounded img-fluid img-expandible`}
                                src={getImageUrl(img)}
                                alt={`${proyecto.titulo} slide ${index}`}></img>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card.Body className='d-flex flex-column'>
                    <h4 className='fw-bold'>{proyecto.titulo}</h4>
                    <p className={`${styles.textCard} mb-4`}>{proyecto.descripcion}</p>
                    <p className={`${styles.textCard} mb-4`}><strong>FECHA: </strong>{proyecto.fechaInicio} - {proyecto.fechaFin}</p>
                    <p className={`${styles.textCard} mb-4`}><strong>TECNOLOGIAS: </strong>{proyecto.tecnologias.join(', ')}</p>
                    <Link to={`/proyectos/${proyecto.id}-${proyecto.titulo.toLowerCase().replace(/\s+/g, '-')}`} className='btn btn-small btn-outline-info'>Ver Proyecto</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProyectoCard;