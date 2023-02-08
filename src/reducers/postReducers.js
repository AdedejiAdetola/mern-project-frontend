const postReducer = (postState = [], action) => {
    switch(action.type) {
        case 'DELETE_POST':
            return postState.filter((onePost) => onePost._id !== action.payload)
        case 'UPDATE_POST':
            return postState.map((onePost) => onePost._id === action.payload._id ? action.payload : onePost)
        case 'FETCH_ALL': //action to fetch all post
            return action.payload;        
        case 'CREATE_POST': //action to get all post
            return [...postState, action.payload];
        default:
            return postState;
    }
}

export default postReducer;