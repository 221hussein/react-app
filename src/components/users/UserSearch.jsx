import React from 'react'
import { useState,useContext } from 'react'
import GithubContext from '../../context/github/GitHubContext'
import AlertContext from '../../context/alert/AlertContext'


function UserSearch() {
    const [text, setText] = useState('')

    const {users, searchUsers, clearUsers} = useContext(GithubContext)

     const {setAlert} = useContext(AlertContext)

    const handleChange =(e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === '') {
            setAlert('this search bar can not be empty','error')
           
        }else {
            //to Search users
            searchUsers(text)
            setText('')
        }
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 mb-8 gap-8'>

        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <p className='ext-lg font-bold 
                align-middle'></p>
                    <div className='relative'>
                        <input type="text"
                         className='w-full pr-40 bg-gray-200 input input-lg text-black' 
                          placeholder='search'
                          value={text}
                          onChange={handleChange}/>
                          <button 
                            type='submit'
                            className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                            >
                            Go
                          </button>
                    </div>
                </div>
            </form>
        </div>
        {/* wanted to show it only users us > 0  */}
        {users.length > 0 && (
                    <div>
                    <button onClick={clearUsers} className='btn btn-ghost btn-lg'>
                        CLEAR
                    </button>
                </div>
        )}

    </div>
  )
}

export default UserSearch
