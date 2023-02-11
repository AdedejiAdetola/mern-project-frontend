import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Form from '../FormComponent/Form';
import Posts from '../PostComponent/Posts';
import { useDispatch } from 'react-redux';
import { getPostsActions } from '../../actions/postActions';


const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch(); //useDispatch dispatches an action

    useEffect(() => {
        dispatch(getPostsActions());
    }, [dispatch]); //useEffect is initially a componentDidMount but later turns to componentWillUpdate, here is where we use our dispatch function as the function updates the state // app updates itself on EVERY dispatch
  return (
    <Grow in>
        <Container>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}/>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
        </Container>
    </Grow>
  )
}

export default Home