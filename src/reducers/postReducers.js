export default (postState = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL': //action to fetch all post
            return action.payload;        
        case 'CREATE_POST': //action to get all post
            return postState;
        default:
            return postState;

    }
}