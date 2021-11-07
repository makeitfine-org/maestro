import React, { Component } from "react";
import ReactDOM from 'react-dom';
import NoteList from './NoteList';
import '../css/Main.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        this.fetchNotes();
    }

    fetchNotes() {
        fetch("/api/note")
            .then(res => res.json())
            .then(
                (response) => {
                    this.setState({
                        notes: response
                    });
                },
                (error) => {
                    alert(error);
                }
            )
    }

    handleSubmit(evt) {
        evt.preventDefault();
        fetch("/api/note", {
            method: "POST",
            body: new FormData(evt.target)
        }).then((response) => {
                if (response.ok) {
                    this.fetchNotes();
                } else {
                    alert("Failed to create note");
                }
            }
        ).catch((error) => {
            alert(error);
        });
        evt.target.reset();
        return false;
    }

    render() {
        return (
            <div id="main">
                <h1>My Notes</h1>
                <NoteList notes={this.state.notes}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input id="title" name="title" type="text" placeholder="Enter title"/>
                    <button type='submit'>Create</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('react-mountpoint')
);
