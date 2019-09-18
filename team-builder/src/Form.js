import React, { useState, useEffect } from "react";







const Form = props => {
  const [form, setForm] = useState({ name: "", email: "", role:"" });
  const changeHandler = event => {
    //computed properties
    console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newNote = {
       ...form 
      //id: Date.now()
    };
    props.addmember(newNote);
    setForm({ name: "", email: "", role:""}); 



    
    props.memberToEdit(newNote);
    setForm({ ...form, name: "", email: "", role:""}); 


  };

  
    
    
  
  




  return (
    <form onSubmit={submitForm}>

      <div className = "HeaderA">

      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        // placeholder="Enter Name"
         value={form.name}
        onChange={changeHandler}
      />

      
      <label htmlFor="email">Email</label>
      <input
      
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={changeHandler}
      />

    <label htmlFor="role">Role</label>
      <input
        name="role"
        placeholder="Enter Role"
        value={form.role}
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