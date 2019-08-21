import React, {useState} from 'react';

import './App.css';

import data from "./data";
import Form from "./Form";
import Notes from "./Notes";

function App() {

    const [member, setMember] = useState(data);
    console.log(member);
     const addNewMember = memb => {
         setMember([...member, memb]);


    };
    return (
      <div className="App">
        <h1>My Team</h1>
        <Form addNewNote={addNewMember} />
        <Notes notesList={member} />
      </div>
    );
  }




  


export default App;
