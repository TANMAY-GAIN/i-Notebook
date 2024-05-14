import React from 'react'
function Alert(props){
  return (
        <div style={{marginTop:'70px'}}>
           { props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
           <strong>{props.Alert.type}</strong>: {props.Alert.msg}
          </div>}
        </div>
        
  )
}

export default Alert