import React from 'react'

const Meeting = ({params}:{params:{id:string}}) => {
  return (
    <div>
        <div>Meeting Room: #{params.id}</div>
    </div>
  )
}

export default Meeting
