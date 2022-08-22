import {Grid, Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

const ListadoNoticias = () => {
    
    const {noticias, totalNoticias} = useNoticias()
  
    console.log(totalNoticias)
  
    return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Ultimas Noticias
        </Typography>

        <Grid 
            container
            spacing={2}
        >

            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        <Stack 
            sx={{
                marginY: 5
            }}
            spacing={2}
            direction ={'row'}
            justifyContent='center'
            alignItems='center'

            
        >
           
            <Pagination count ={10} color ="primary"/>
            
        </Stack>
    </>
  )
}

export default ListadoNoticias