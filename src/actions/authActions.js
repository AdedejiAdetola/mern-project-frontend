import * as api from '../api';

export const signinAction = (formData, navigate) => async (dispatch) => {
    try {
        //log in user
        const { data } = await api.signIn(formData);

        dispatch({ type: 'AUTH', data});
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const signupAction = (formData, navigate) => async (dispatch) => {
    console.log(formData) 
    try {
        //signup user
        const { data } = await api.signUp(formData);

        dispatch({ type: 'AUTH', data});
        //dispatch({ type: 'AUTH', data});
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}