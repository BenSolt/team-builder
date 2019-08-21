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
        placeholder="Enter Name"
        value={note.name}
        onChange={changeHandler}
      />

      
      <label htmlFor="email">Email body</label>
      <input
      
        name="email"
        placeholder="Enter Email"
        value={note.email}
        onChange={changeHandler}
      />

    <label htmlFor="role">Role body</label>
      <input
        name="role"
        placeholder="Enter Role"
        value={note.role}
        onChange={changeHandler}
      />

        <div className = "btn">
        <button type="submit">Add note</button>
        </div>
      

      </div>

    </form>
  );
};

export default Form;