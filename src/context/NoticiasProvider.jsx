import {useState, useEffect, createContext} from 'react'

import axios from 'axios'


const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)


    /**
     * Funcion para actualizar la categoria
     * @param {*} e 
     */
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    /**
     * Funcion para actualizar el paginador
     * @param {*} e 
     */
    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }

    /**
     * useEffect para consultar la api de newsapi cuando se modifique la categoria
     */
    useEffect(() => {
        const consultarAPI = async () =>{
            const url=`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`

            
            const {data } = await axios(url)
            
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPagina(1)
        }
        consultarAPI()
    },[categoria])


      /**
     * useEffect para consultar la api de newsapi cuando se modifique la pagina
     */
       useEffect(() => {
        const consultarAPI = async () =>{
            const url=`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=20&page=${pagina}&apikey=${import.meta.env.VITE_API_KEY}`

            
            const {data } = await axios(url)
           
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        consultarAPI()
    },[pagina])

  return (
    <NoticiasContext.Provider value = {{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina
        
    }}>
        {children}
    </NoticiasContext.Provider>
  )
}

export {
    NoticiasProvider
}
export default NoticiasContext