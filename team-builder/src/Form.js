import React, { useState } from "react";

const Form = props => {
  const [note, setNote] = useState({ name: "", email: "", role:"" });
  const changeHandler = event => {
    //computed properties
    console.log(event.target.value);
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newNote = {
      ...note,
      id: Date.now()
    };
    props.addNewNote(newNote);
    setNote({ name: "", email: "", role:""});
  };
  return (
    <form onSubmit={submitForm}>

      <div className = "HeaderA">

      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="note title"
        value={note.name}
        onChange={changeHandler}
      />

      
      <label htmlFor="email">Email body</label>
      <input
      
        name="email"
        placeholder="Type your note here"
        value={note.email}
        onChange={changeHandler}
      />

    <label htmlFor="role">Role body</label>
      <input
        name="role"
        placeholder="Type your note here"
        value={note.role}
        onChange={changeHandler}
      />


      <button type="submit">Add note</button>

      </div>

    </form>
  );
};

export default Form;