import * as api from '../api';

//action creators - functions that return actions

export const getPostsActions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        const action = {
            type: 'FETCH_ALL',
            payload: data
        }

        dispatch(action)
    } catch (error) {
        console.log(error.message);
    }
}

export const createPostsActions = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post);

        const action = {
            type: 'CREATE_POST',
            payload: data
        }

        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}
