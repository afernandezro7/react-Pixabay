import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';




function App() {

  const [mainsearch, setMainSearch] = useState('')
  const [imagenes, setImagenes] = useState([])

  //State del paginador
  const [paginaactual, setPaginaactual] = useState(1)
  const [totalpaginas, setTotalpaginas] = useState(1)

  useEffect(() => {
    
    if(mainsearch==='') return;

    const consultarApi = async()=>{

      const imagesPerPAge= 30;
      const strSearch= mainsearch.replaceAll(' ', '+')
      const apikey= '18475571-b8d1a76b98fead1be0406a5bc';
      const url = `https://pixabay.com/api/?key=${encodeURI(apikey)}&q=${strSearch}&per_page=${encodeURI(imagesPerPAge)}&image_type=photo&order=popular&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const {hits, totalHits} = await respuesta.json()

      setImagenes(hits);

      //Calcular total de páginas
      const calcTotalPages= Math.ceil(totalHits/imagesPerPAge)
      setTotalpaginas(calcTotalPages)

      //mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})

      

    }

    consultarApi()

  }, [mainsearch,paginaactual])

  //restablecer la página actual si hay una búsqueda nueva
  useEffect(() => {
    setPaginaactual(1)
  }, [mainsearch])

  // definir pagina Anterior
  const paginaAnterior = () =>{

    let nuevaPaginaActual= paginaactual - 1 

    if(nuevaPaginaActual===0) return;
    
    setPaginaactual(nuevaPaginaActual)
  }

  // definir pagina Siguiente
  const paginaSiguiente = () =>{
    let nuevaPaginaActual= paginaactual + 1 

    if(nuevaPaginaActual > totalpaginas) return;
    
    setPaginaactual(nuevaPaginaActual)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario
          setMainSearch={setMainSearch}
        />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        />
        {
          paginaactual === 1 
          ?
            null
          :
            <button
              className="btn btn-info mr-1"
              type="button"
              onClick={ paginaAnterior }
            >&laquo; Anterior</button>
        }

        {
          paginaactual === totalpaginas 
          ?
            null
          :
            <button
              className="btn btn-info "
              type="button"
              onClick={ paginaSiguiente }
            >Siguiente &raquo;</button>
        }



      </div>

    </div>
  );
}

export default App;
