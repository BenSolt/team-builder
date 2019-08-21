import React, {useState} from "react";



Function TeamMember(){
    const [member, setMember] = usetState(data);
    const addNewMember = newmember => {
        setNotes([...member, setMember]);
      };
      return (
        <div className="Member">
          <h1>Mmeber Name</h1>
          <NoteForm addNewNote={addNewNote} />
          <Notes notesList={notes} />
        </div>
      );
    }
