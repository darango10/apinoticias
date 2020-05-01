import React from 'react';

const Noticia = ({noticia}) => {

    //Exraer los datos d ela noticia
    const {author, title, description, url, urlToImage, publishedAt, content, source} = noticia

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className={'card-title'}>{source.name}</span>
        </div>
        : null;

    return (
        <div className={'col s12 m6 l4'}>
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel='noreferrer noopener'
                       className='waves-effect waves-light btn'>Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
};

export default Noticia;