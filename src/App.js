import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Form from './components/FormComponent/Form';
import Posts from './components/PostComponent/Posts';
import memoriesImage from './images/memories.jpg'
import useStyles from './styles'

const App = () => {
    const classes = useStyles();
    return ( 
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <Grid container justifyContent="flex-start" alignItems="center" >
                    <Grid item xs={2} sm={2}>
                        <img className={classes.image} src={memoriesImage} alt='memories' width='100%' />
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