import React from 'react'
import {  useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

//import the context here
import GithubContext from '../../context/github/GitHubContext'

function UserResults() {
    const {users, loading, fetchUsers} = useContext(GithubContext)
    //all this things will move into a Global context : GithubContex.js
// const [users, setUsers] = useState([])
// const [loading, setLoading] = useState(true)

    //allow to auto load the component 
    // useEffect(() => {
    //   fetchUsers()
    // }, [])

    //all this things will move into a Global context : GithubContex.js
    //fetch user from GitHub api 
    // const fetchUsers = async () => {
    //     const response = await  fetch (`${process.env.REACT_APP_GITHUB_URL}/users`,{
    //         headers : {
    //             Authorization: 
    //             `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     })

    //     const data =  await response.json()

    //     setUsers(data)
    //     setLoading(false)
    // }

    if(!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4
            lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    // <h3>{user.login}</h3>
                    //use the User Item COmponent 
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
          ) 
    } else {
        return <Spinner />
    }
}

export default UserResults