import React, { Component } from "react";
import NoteList from "./NoteList/NoteList";
import NoteCreator from "./NoteCreator/NoteCreator";
import { SaveNote, GetAllNotes, DeleteNote } from "../../Repo";
import Styles from "./NoteSystem.module.css";

class NoteSystem extends Component {
	constructor() {
		super();
		const RepoNoteList = GetAllNotes();
		this.state = {
			CurrentNoteTitle: "",
			CurrentNoteContent: "",
			CurrentBgColor: "#da9100",
			AllNotes: RepoNoteList,
			ShowingNoteList: true,
		};
	}

	CreateNewNote() {
		this.setState({
			CurrentNoteTitle: "",
			CurrentNoteContent: "",
			ShowingNoteList: false,
		});
	}

	SaveNoteHanlder(note) {
		let ArrayNotes = this.state.AllNotes.slice();
		const NoteSelected = ArrayNotes.find((x) => x.Title === note.Title);
		SaveNote(note);
		if (NoteSelected === undefined) {
			const newArray = this.state.AllNotes.concat(note);
			this.setState({
				AllNotes: newArray,
			});
		} else {
			//Note already exist (we have to update)
			var index = ArrayNotes.findIndex((n) => n.Title === note.Title);
			ArrayNotes.splice(index, 1);
			const newNote = {
				Title: note.Title,
				Content: note.Content,
				bgColor: note.bgColor,
			};
			ArrayNotes.push(newNote);
			this.setState({
				CurrentNoteTitle: newNote.Title,
				CurrentNoteContent: newNote.Content,
				AllNotes: ArrayNotes,
			});
		}
		this.SetShowNote(true);
	}

	SelectNoteHandler(key) {
		this.SetShowNote(false);
		const ArrayNotes = this.state.AllNotes;
		const NoteSelected = ArrayNotes.find((x) => x.Title === key);
		if (NoteSelected !== undefined) {
			this.setState({
				CurrentNoteTitle: NoteSelected.Title,
				CurrentNoteContent: NoteSelected.Content,
				CurrentBgColor: NoteSelected.bgColor,
			});
		} else {
			alert("that note does not exist");
		}
	}

	DeleteNoteHanlder(note) {
		let ArrayNotes = this.state.AllNotes.slice();
		const NoteSelected = ArrayNotes.find((x) => x.Title === note.Title);
		if (NoteSelected !== undefined) {
			var index = ArrayNotes.findIndex((n) => n.Title === note.Title);
			ArrayNotes.splice(index, 1);
			this.setState({
				CurrentNoteTitle: "",
				CurrentNoteContent: "",
				AllNotes: ArrayNotes,
			});
			DeleteNote(note);
		}
		this.SetShowNote(true);
	}

	SetShowNote(bool) {
		this.setState({
			ShowingNoteList: bool,
		});
	}

	HanldeChange() {
		const showingList = this.state.ShowingNoteList;
		if (showingList) {
			this.CreateNewNote();
		} else {
			this.setState({
				ShowingNoteList: true,
			});
		}
	}

	render() {
		const jsx = (
			<React.Fragment>
				<header className={Styles.header}>
					<button
						onClick={() => {
							this.setState({
								ShowingNoteList: true,
							});
						}}
					>
						<h1>Note Pin</h1>
					</button>
				</header>
				<main className={Styles.main}>
					{this.state.ShowingNoteList ? (
						<NoteList noteList={this.state.AllNotes} onSelect={this.SelectNoteHandler.bind(this)} />
					) : (
						<NoteCreator
							onDelete={this.DeleteNoteHanlder.bind(this)}
							onSave={this.SaveNoteHanlder.bind(this)}
							title={this.state.CurrentNoteTitle}
							content={this.state.CurrentNoteContent}
							bgColor={this.state.CurrentBgColor}
						/>
					)}
				</main>
				<footer className={Styles.footer}>{this.state.ShowingNoteList ? <button onClick={() => this.HanldeChange()}>New Note</button> : null}</footer>
			</React.Fragment>
		);
		return jsx;
	}
}

export default NoteSystem;
