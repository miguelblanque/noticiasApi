import {useState, useEffect, createContext} from 'react'

import axios from 'axios'


const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    // consultar la api
    useEffect(() => {
        const consultarAPI = async () =>{
            const url=`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=100&apikey=${import.meta.env.VITE_API_KEY}`

            
            const {data } = await axios(url)
            console.log(data.articles)
            setNoticias(data.articles)
        }
        consultarAPI()
    },[categoria])

  return (
    <NoticiasContext.Provider value = {{
        categoria,
        handleChangeCategoria,
        noticias
    }}>
        {children}
    </NoticiasContext.Provider>
  )
}

export {
    NoticiasProvider
}
export default NoticiasContext