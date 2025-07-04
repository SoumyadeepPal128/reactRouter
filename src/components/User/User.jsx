import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()

  return (
    <div className=' flex flex-wrap bg-orange-500 text-black text-3xl justify-center align-middle px-2 py-3'>User: {userid}</div>
  )
}

export default User