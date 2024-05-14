import React, { useContext, useEffect, useRef,useState } from "react";
import noteContex from "./context/NoteContex";
import Noteitem from "./Noteitem";
import image2 from './image2.jpeg'; // Import the image
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { Link } from "react-router-dom";


const Notes = (props) => {
  const context = useContext(noteContex);
  const {  notes, getNotes , EditNote } = context;
  let history = useHistory();
  

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      history.push('/login')
    }
      
  }, []);


  

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note , setNote] = useState({id: "" ,etitle: "", edescription:"", etag:""})


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id ,etitle: currentNote.title , edescription: currentNote.description , etag: currentNote.tag})
    
  };
  const handleonClick=()=>{
    setTimeout(function(){
      window.location.reload(1);
   }, 500); // Refresh every 5 seconds (5000 milliseconds)
  }

  const handleClick=(e)=>{
    
    EditNote(note.id , note.etitle , note.edescription , note.etag);
    refClose.current.click();
    props.showAlert("Updated Sucessfully" ,"info")
  }
  const onChange=(e)=>{
    setNote({...note , [e.target.name]: e.target.value})
  }
  return (
    <>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
      <h1><span className="i" style={{color : "#9f27ab"}}>i</span>Notebook</h1>
    <h3>Your notebook on cloud - safe and secure</h3>
    <h6>An online web platfrom where you can create, edit, uplaod,delete your notes/information privately and securely without any disturbance.For more info you can checkout our <a href="http://localhost:3000/about">About</a></h6>
    <Link to="/CreateNote"><button onClick={handleonClick} style={{marginTop:"30px" , backgroundColor:"#9f27ab" ,color : "white", height : "40px" , width:"150px"}}>Create New Note</button></Link>
    </div>
    <img src={image2} className="img-fluid" alt="Signup " />
    </div>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
              ref={refClose}
                type="button"
                className="btn btn-secondary"
                
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1 style={{fontWeight : "bold"}}>Your Notes :</h1>
        <div className="container mx-2">
        {notes.length ===0 && "No Note To Display"}
        </div>
        
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
