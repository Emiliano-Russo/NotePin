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
			<input placeholder="Title..." ref={Title} style={{ backgroundColor: color }}></input>
			<textarea placeholder="Content..." ref={Content} style={{ backgroundColor: color }}></textarea>
			<div className={Styles.ButtonColors}>
				<button style={{ backgroundColor: "#4169e1" }} onClick={() => changeColorsHanlder("#4169e1")}></button>
				<button style={{ backgroundColor: "#EA3C53" }} onClick={() => changeColorsHanlder("#EA3C53")}></button>
				<button style={{ backgroundColor: "#74c365" }} onClick={() => changeColorsHanlder("#74c365")}></button>
				<button style={{ backgroundColor: "#f5984f" }} onClick={() => changeColorsHanlder("#f5984f")}></button>
			</div>
			<div className={Styles.Holder}>
				<button className={Styles.TickButton} onClick={() => SaveNote()}>
					✓
				</button>
				<button className={Styles.DeleteButton} onClick={() => RemoveNote()}>
					X
				</button>
			</div>
		</div>
	);
	return jsx;
};

export default NoteCreator;
