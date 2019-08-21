import React, { useState } from "react";

const Form = props => {
  const [fom, setNote] = useState({ name: "", email: "", role:"" });
  const changeHandler = event => {
    //computed properties
    console.log(event.target.value);
    setNote({ ...fom, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newNote = {
      ...fom,
      //id: Date.now()
    };
    props.addmember(newNote);
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
        // value={foma.name}
        onChange={changeHandler}
      />

      
      <label htmlFor="email">Email</label>
      <input
      
        name="email"
        placeholder="Enter Email"
        value={foma.email}
        onChange={changeHandler}
      />

    <label htmlFor="role">Role</label>
      <input
        name="role"
        placeholder="Enter Role"
        value={fom.role}
        onChange={changeHandler}
      />

        <div className = "btndiv">
        <button type="submit">Add note</button>
        </div>
      

      </div>

    </form>
  );
};

export default Form;