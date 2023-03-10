import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPostsActions, updatePostsActions } from '../../actions/postActions';

const Form = ({currentId, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector(state => currentId ? state.postReducers.find((onePost) => onePost._id === currentId) : null);
    const [postData, setPostData] = useState({
        title:'',
        message:'',
        tags:'',
        selectedImageFile:''
    });
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId){
            dispatch(updatePostsActions(currentId, {...postData, name: user?.result?.name }))
        } else {
            dispatch(createPostsActions({...postData, name: user?.result?.name })) //takes postData and uses it to create post 
        }
        clear();
        
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            title:'',
            message:'',
            tags:'',
            selectedImageFile:''
        })
    }

    if(!user?.result?.name) {
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to create your memories and like other's memories.
                </Typography>
            </Paper>
        )
    }
    return ( 
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} Memory</Typography>
                
                <TextField 
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={postData.title}
                    onChange={(e) => {setPostData({ ...postData, title: e.target.value})}}
                />

                <TextField 
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    value={postData.message}
                    onChange={(e) => {setPostData({ ...postData, message: e.target.value})}}
                />

                <TextField 
                    name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => {setPostData({ ...postData, tags: e.target.value.split(',')})}}
                />

                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone = {({base64}) => setPostData({ ...postData, selectedImageFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' fullWidth type='submit'>Submit</Button>
                <Button variant='contained' color='secondary' size='small' fullWidth onClick={clear}>Clear</Button>
            </form>
        </Paper>
     );
}
 
export default Form;