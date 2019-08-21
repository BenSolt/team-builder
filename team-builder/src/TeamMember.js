import React from "react";

const Notes = props => {
  console.log(props);
  return (
    <div className="note-list">
      {props.notesa.map(note => {
        return (
          <div className="note" key={note.id}>
            <h2>{note.name}</h2>
            <p>{note.email}</p>
            <p>{note.role}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Notes;