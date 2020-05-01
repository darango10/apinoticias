import React from 'react';
import styles from './ContenedorNoticia.module.css'
import PropTypes from "prop-types";


const Noticia = ({noticia}) => {

    //Exraer los datos d ela noticia
    const {title, description, url, urlToImage, source} = noticia

    const imagen = (urlToImage) ?
        <div className={`card-image`}>
            <img className={`${styles.imagen}`} src={urlToImage} alt={title}/>
            <span className={'card-title'}>{source.name}</span>
        </div>
        : null;

    return (
        <div className={`${styles.contenedor} col s12 m6 l4`}>
            <div className={`${styles.cardLarge} card large`}>
                {imagen}
                <div className={`${styles.contenido} card-content`}>
                    <h3 className={styles.titulo}>{title}</h3>
                    <p className={styles.parrafo}>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel='noreferrer noopener'
                       className='waves-effect waves-light btn'>Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;