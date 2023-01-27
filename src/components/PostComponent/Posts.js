import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from './styles'

const Posts = () => {
    const postLibrary = useSelector(state => state.postReducers); //state.postReducers work because the default (in postReducers.js)says to return poststate
    const classes = useStyles();

    console.log(postLibrary);
    return ( 
        <>
            <h2>Posts</h2>
            <Post />
            <Post />
        </>
     );
}
 
export default Posts;