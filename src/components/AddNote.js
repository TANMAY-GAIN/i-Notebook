import React, { useContext, useState } from 'react'
import noteContex from './context/NoteContex';

const AddNote = (props) => {
    const context = useContext(noteContex);
  const {addNote} = context;
  const [note , setNote] = useState({title: "", description:"", tag:""})

  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title , note.description , note.tag);
    setNote({title: "", description:"", tag:""})
    props.showAlert("Added Sucessfully" ,"info")
  }
  const onChange=(e)=>{
    setNote({...note , [e.target.name]: e.target.value})
  }
  return (
    <div >
      <div className="container my-3" >
      <h1 style={{marginBottom : "15px"}}>Create new Note</h1>
      <h5 style={{marginBottom : "25px"}}>Add a new note with your info / notes</h5>
    <form className="my-3"style={{ width:"600px" }}>
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name="title"aria-describedby='emailHelp'   value={note.title} onChange={onChange} />
</div>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Description</label>
  <input type="text" className="form-control" id="description" name="description"  value={note.description} onChange={onChange} />
  </div>
  <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Tag</label>
  <input type="text" className="form-control" id="tag" name="tag"  value={note.tag} onChange={onChange} />
  </div>
  <button type='submit' className='btn-btn-primary'onClick={handleClick} style={{ width:"600px" ,height: "35px",
    borderRadius: "5px", marginBottom : "10px",marginTop : "10px" }}>Add Note</button>
</form>
</div>
    </div>
  )
}

export default AddNote
