import React, {Fragment, useEffect, useState} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {

    const [categoria, guardarCategoria] = useState('')
    const [noticias, guardarNoticias] = useState([])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=41b41ae01d5449d2a1b41bbce51601bd`
            const respuesta = await fetch(url);
            const noticias = await respuesta.json();
            guardarNoticias(noticias.articles)
        }

        consultarAPI()
    }, [categoria])

    return (
        <Fragment>
            <Header titulo={'Buscador de Noticias'}/>
            <div className="container white">
                <Formulario guardarCategoria={guardarCategoria}/>
                <ListadoNoticias noticias={noticias}/>
            </div>
        </Fragment>
    );
}

export default App;
