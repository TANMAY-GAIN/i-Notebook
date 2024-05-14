import React from 'react'
import AddNote from './AddNote'

const CreateNote = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <AddNote showAlert={props.showAlert}/>
    </div>
  )
}

export default CreateNote
