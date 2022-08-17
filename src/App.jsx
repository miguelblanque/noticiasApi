import { Typography, Grid} from '@mui/material';
import Container from '@mui/material/Container';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './context/NoticiasProvider';
import ListadoNoticias from './components/ListadoNoticias';


function App() {
  

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center'  marginY={5} component="h1" variant="h3">
                Buscador de Noticias
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
            <Grid item xs={12} md={6} lg={4}>
              <Formulario/>
            </Grid>
        </Grid>
        
        <ListadoNoticias/>

      </Container>
   </NoticiasProvider>
  )
}

export default App
