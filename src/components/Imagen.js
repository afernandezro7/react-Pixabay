import React from 'react'
import PropTypes from 'prop-types'

const Imagen = ({imagen}) => {

    //extraer las variables del objeto imagen
    const { largeImageURL, likes, previewURL, tags, views} = imagen

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img
                    className="card-img-top"
                    src={ previewURL }
                    alt= { tags }
                />

                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>

                <div className="card-footer">
                    <a 
                        href={largeImageURL}
                        className="btn btn-primary btn-block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver Imagen
                    </a>
                </div>
            </div>
        </div>
    )
}

Imagen.propTypes = {
    imagen: PropTypes.object.isRequired
}

export default Imagen
