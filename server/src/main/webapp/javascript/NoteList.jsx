import React, { Component } from "react";

class NoteList extends Component {
    render() {
        if (!this.props.notes) {
            return <div>No Notes yet...</div>
        }
        return (
            <ul id="note-list">
                {this.props.notes.map(note => (
                    <li key={note.id}>
                        {note.name}
                    </li>
                ))}
            </ul>
        );
    }
}

export default NoteList;