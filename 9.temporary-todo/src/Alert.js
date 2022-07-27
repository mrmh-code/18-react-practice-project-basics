import React, { useEffect } from 'react'

const Alert = ({type,msg,showAlert,list}) => {
  useEffect(()=> {
    const timeOut=setTimeout(()=>{
      showAlert(false)
    },3000);

    return ()=> clearTimeout(timeOut);
  },[list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
