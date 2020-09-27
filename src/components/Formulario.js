import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types'

const Formulario = ({setMainSearch}) => {

    // Set search state 
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false)

    // handle query input 
    const handleChange = ( { target } ) => {
        
        setSearch(target.value)

    }
    

    //handle Submit Form
    const handleSubmit = e =>{
        e.preventDefault();
        
        // Field Validation
        if(search.trim() === ''){
            setError(true)
            return;
           
        }

        //Send the result to the main component
        setError(false)
        setMainSearch( search )
    }



    return (
        <form
            onSubmit={ handleSubmit }
        >
            
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: futbol o plantas"                      
                        onChange={ handleChange }
                        value={search}
                        
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                        
                    />
                </div>
                
                
            </div>
            
            {
                error ? <Error mensage="Agrega un término de búsqueda"/> : null
            }

        </form>
    )
}

Formulario.propTypes = {
    setMainSearch: PropTypes.func.isRequired
}

export default Formulario
