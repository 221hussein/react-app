//the reducer
const githubReducer = (state, action) => {
    //evaluate the action type 
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading:false ,
            }

        case 'GET_USER' :
            return {
                    ...state,
                    user: action.payload,
                    loading: false
        }

        case 'GET_REPO' :
            return {
                ...state,
                repos: action.payload.repos,
                loading: false
            }

        case 'SET_LOADING' : 
            return {
                ...state,
                loading:true
            }   
        case 'CLEAR_USERS' :
            return {
                ...state,
                users: [] //this is an empty arrays
            }
     
        default:
            return state
    }
    
} 
export default githubReducer