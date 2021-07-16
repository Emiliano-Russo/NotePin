import Styles from "./NoteCreator.module.css";
import { useRef, useEffect, useState } from "react";

const NoteCreator = (props) => {
	const Title = useRef(null);
	const Content = useRef(null);
	const [color, setColor] = useState("#4169e1");

	function SaveNote() {
		const Note = {
			Title: Title.current.value,
			Content: Content.current.value,
			bgColor: color,
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

	function changeColorsHanlder(colorNote) {
		setColor(colorNote);
	}

	useEffect(() => {
		Title.current.value = props.title;
		Content.current.value = props.content;
		setColor(props.bgColor);
		console.log("a ver");
	}, []);

	const jsx = (
		<div className={Styles.NoteCreator}>
			<input placeholder="Title..." ref={Title} maxLength="17" style={{ backgroundColor: color }}></input>
			<textarea placeholder="Content..." ref={Content} style={{ backgroundColor: color }}></textarea>
			<div className={Styles.ButtonColors}>
				<button style={{ backgroundColor: "#4169e1" }} onClick={() => changeColorsHanlder("#4169e1")}></button>
				<button style={{ backgroundColor: "#EA3C53" }} onClick={() => changeColorsHanlder("#EA3C53")}></button>
				<button style={{ backgroundColor: "#74c365" }} onClick={() => changeColorsHanlder("#74c365")}></button>
				<button style={{ backgroundColor: "#da9100" }} onClick={() => changeColorsHanlder("#da9100")}></button>
			</div>
			<button onClick={() => SaveNote()}>Save</button>
			<button id="delete" onClick={() => RemoveNote()}>
				Delete
			</button>
		</div>
	);
	return jsx;
};

export default NoteCreator;
