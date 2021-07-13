import Styles from "./NoteCreator.module.css";
import { useRef, useEffect, useState } from "react";

const NoteCreator = (props) => {
	const Title = useRef(null);
	const Content = useRef(null);

	const [styles, setStyles] = useState({
		backgroundColor: "white",
	});

	function SaveNote() {
		setStyles({
			backgroundColor: "white",
		});
		const Note = {
			Title: Title.current.value,
			Content: Content.current.value,
		};
		props.onSave(Note);
	}

	function RemoveNote() {
		const Note = {
			Title: Title.current.value,
			Content: Content.current.value,
		};
		props.onDelete(Note);
	}

	useEffect(() => {
		Title.current.value = props.title;
		Content.current.value = props.content;
	});

	function ChangeColorButton() {
		setStyles({
			backgroundColor: "crimson",
		});
	}

	const jsx = (
		<div className={Styles.NoteCreator}>
			<input placeholder="Title..." ref={Title} maxLength="17"></input>
			<textarea placeholder="Content..." ref={Content}></textarea>
			<button onClick={() => SaveNote()} style={styles}>
				Save
			</button>
			<button id="delete" onClick={() => RemoveNote()}>
				Delete
			</button>
		</div>
	);
	return jsx;
};

export default NoteCreator;
