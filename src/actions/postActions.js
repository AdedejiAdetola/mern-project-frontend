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
        console.log(error);
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
        console.log(error)
    }
}

export const updatePostsActions = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePosts(id, post);

        const action = {
            type: 'UPDATE_POST',
            payload: data
        }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const deletePostsActions = (id) => async(dispatch) => {
    try {
        await api.deletePosts(id);

        const action = {
            type: 'DELETE_POST',
            payload: id
        }

        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const likePostsAction = (id) => async(dispatch) => {
    try {
        const { data } = await api.likePosts(id);
        console.log(data)

        const action = {
            type: 'LIKE_POST',
            payload: data
        }
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}