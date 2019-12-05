import React from 'react'

const Notification = ( { message } ) => {


  if(message===''){
    return null
  } else if (message.includes('wrong username')) {
    return <div className="errorMessage" > {message} </div>
  } else {
    return <div className="message" > {message} </div>
  }
}

export default Notification