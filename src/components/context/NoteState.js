import React, { useState } from "react";
import NoteContex from "./NoteContex";
const NoteState =(props)=>{

  const host = "http://localhost:5000"

    const notesInitial = [
      ]
      const [notes , setNotes] = useState(notesInitial)

      // Get all note
      const getNotes= async ()=>{
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "awt-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMWFkNWQxNzZmZDgwNTIzNmU2ZmJiIn0sImlhdCI6MTcxNDUzMzUxMH0._Z5HPoQUshzWZZC0OnRjW5ySCCyHz7HsUTzCdWdS_Lo"
          }
          
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
        }

      // Add a Note
      const addNote= async (title , description , tag)=>{
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "awt-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMWFkNWQxNzZmZDgwNTIzNmU2ZmJiIn0sImlhdCI6MTcxNDUzMzUxMH0._Z5HPoQUshzWZZC0OnRjW5ySCCyHz7HsUTzCdWdS_Lo"
          },
        
          body: JSON.stringify({title , description , tag}), 
        });

        const note = await response.json();
        
        //Logic to add a note

        setNotes(notes.concat(note))
      }
      //Delete a Note

      const DeleteNote= async (id)=>{

      //API call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "awt-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMWFkNWQxNzZmZDgwNTIzNmU2ZmJiIn0sImlhdCI6MTcxNDUzMzUxMH0._Z5HPoQUshzWZZC0OnRjW5ySCCyHz7HsUTzCdWdS_Lo"
        },
      
      });
      const json = response.json();
      console.log(json)
        console.log("Deleting the note with id " +id)
        const newNote = notes.filter((note)=>{return note._id !== id})
        setNotes(newNote)
      }
      //Edit a Note

      const EditNote= async (id , title, description , tag)=>{
        //API call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
            "awt-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMWFkNWQxNzZmZDgwNTIzNmU2ZmJiIn0sImlhdCI6MTcxNDUzMzUxMH0._Z5HPoQUshzWZZC0OnRjW5ySCCyHz7HsUTzCdWdS_Lo"
          },
        
          body: JSON.stringify({title , description , tag}), 
        });
        const json = response.json();
        console.log(json)

        let NewNote = JSON.parse(JSON.stringify(notes))

        //logic to edit in client
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if (element._id === id) {
            NewNote[index].title = title;
            NewNote[index].description = description;
            NewNote[index].tag = tag;
            break;
          }
          
        }
        setNotes(NewNote);
      }

    return(
    <NoteContex.Provider value={{notes , setNotes, addNote, DeleteNote, EditNote , getNotes}}>
        {props.children}
    </NoteContex.Provider>
    )
}



export default NoteState;