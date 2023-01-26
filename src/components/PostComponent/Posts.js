import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from './styles';

const Posts = () => {
    const postData = useSelector(state => state.postReducers);
    const classes = useStyles();

    console.log(postData);
    return ( 
        <>
            <h2>Posts</h2>
            <Post />
            <Post />
        </>
     );
}
 
export default Posts;