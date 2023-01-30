import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core';
import Post from "./Post/Post";
import useStyles from './styles'

const Posts = () => {
    const postLibrary = useSelector(state => state.postReducers); //state.postReducers work because the default (in postReducers.js)says to return poststate
    const classes = useStyles();

    console.log(postLibrary);
    return ( 
        !postLibrary.length ? <CircularProgress /> : (
            <Grid className={ classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    postLibrary.map((eachPost) => (
                        <Grid key={eachPost._id} item xs={12} sm={6}>
                            <Post post={eachPost} />
                        </Grid>
                    ))
                }
            </Grid>
        )
     );
}
 
export default Posts;