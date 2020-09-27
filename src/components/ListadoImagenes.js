import React from 'react'
import PropTypes from 'prop-types'
import Imagen from './Imagen'

const ListadoImagenes = ({imagenes}) => {
    return (
        <div className="col-12 p-5 row">
            {imagenes.map( imagen =>(
                <Imagen
                    imagen={imagen}
                    key={imagen.id}
                />
            ))}
        </div>
    )
}

ListadoImagenes.propTypes = {
    imagenes: PropTypes.array.isRequired
}

export default ListadoImagenes
