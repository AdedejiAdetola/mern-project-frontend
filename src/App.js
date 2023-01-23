import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Form from './components/FormComponent/Form';
import Posts from './components/PostComponent/Posts';
import memoriesImage from './images/memories.jpg'

const App = () => {
    return ( 
        <Container maxWidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Memories</Typography>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={11} sm={9}>
                        <img src={memoriesImage} alt='memories' width='100%' />
                    </Grid>
                </Grid>                
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
     );
}
 
export default App;