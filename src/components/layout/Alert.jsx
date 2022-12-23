import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import error from './assets/error.gif'


function Alert() {
    const {alert} = useContext(AlertContext)
  return alert !==null && (
    <p className='flex items-start mb-4 space-x-2'>
        {alert.type === 'error' && (
            <img src={error} alt='' className='w-20' />
        )}
        <p className='flex-1 text-base font-semibold leading-7 text-white'>
            <strong>{alert.msg}</strong>
        </p>
    </p>
  ) 
  
}

export default Alert