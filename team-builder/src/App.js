import React, {useState} from 'react';

import './App.css';

import data from "./data";
import Form from "./Form";
import Notes from "./Notes";

function App() {

    const [member, setMember] = useState(data);
    console.log(member);
     const addNewMember = test => {
         setMember([...member, test]);


    };
    return (
      <div className="App">
        <h1>My Notes</h1>
        <Form addNewNote={addNewMember} />
        <Notes notesList={member} />
      </div>
    );
  }




  


export default App;
