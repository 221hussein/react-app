// import { createContext , useState } from "react";//using useState
import { createContext , useReducer } from "react";//using reducer
import githubReducer from "./GithubReducer";

const GithubContext = createContext()


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    //const [repos , setRepos] = useState([])
    const initialState = { //when we use reducer
        users: [],
        user: {},//to fetch a unique user like user by id
        repos:[],
        loading:false //if you want see automtically the users set it to true
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
       

    //Get initial users (testing purposes)
    // const fetchUsers = async () => {   
    //     setLoading()
    //     const response = await  fetch (`${GITHUB_URL}/users`,{
    //         headers : {
    //             Authorization: 
    //             `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const data =  await response.json()

    //     // setUsers(data) 
    //     // setLoading(false)
    //     dispatch ({ // the way to do it with reducer
    //         type : 'GET_USERS',
    //         payload :  data,

    //     })

    // }


    // search users
    const searchUsers = async (text) => {   
        setLoading()

        const params = new URLSearchParams({
            q:text
        })
        const response = await  fetch (`${GITHUB_URL}/search/users?${params}`,{
            headers : {
                Authorization: 
                `token ${GITHUB_TOKEN}`
            }
        })

        const {items} = await response.json()

        // setUsers(data) 
        // setLoading(false)
        dispatch ({ // the way to do it with reducer
            type : 'GET_USERS',
            payload :  items,

        })

    }

    
    // get signgle user
    const getUser = async (login) => {   
        setLoading()

        // const params = new URLSearchParams({
        //     q:text
        // })
        const response = await  fetch (`${GITHUB_URL}/users/${login}`,{
            headers : {
                Authorization: 
                `token ${GITHUB_TOKEN}`
            }
        })

        if(response.status === 404) {
            window.location ='/notfound'
        }else {
            const data = await response.json()

            // setUsers(data) 
            // setLoading(false)
            dispatch ({ // the way to do it with reducer
                type : 'GET_USER',
                payload :  data,
    
            })


        }

   }

    //get github repos
    const getUserRepos = async (login) => {
        setLoading()

        const params = new URLSearchParams ({
            sort : 'created',
            per_page: 10,
        })
    

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
        headers : {
            Authorization: 
            `token ${GITHUB_TOKEN}`
        },

    })
    const data = await response.json()

    // setRepos(data) 
    // setLoading(false)
    dispatch ({ // the way to do it with reducer
        type : 'GET_REPO',
        payload :  data,

    })
}





    // clear users from state 
    const clearUsers = () => dispatch({
        type:'CLEAR_USERS'
    })
    //Set loading
    const setLoading = () =>dispatch ({
        type :'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        // users,
        // loading,
        users: state.users,// the way to do it with reducer
        loading: state.loading,// the way to do it with reducer
        // fetchUsers,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {children}
    </GithubContext.Provider>

}
export default GithubContext 