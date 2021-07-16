import Styles from "./NoteList.module.css";

const NoteList = (props) => {
	function ConvertNote(note) {
		console.log("color note: " + note.bgColor);
		const jsx = (
			<button className={Styles.note} id="Note" key={note.Title} style={{ backgroundColor: note.bgColor }} onClick={() => props.onSelect(note.Title)}>
				<p style={{ textDecoration: "underline" }}>{note.Title}</p>
				<p>{note.Content}</p>
			</button>
		);
		return jsx;
	}

	const jsx = <div className={Styles.noteList}>{props.noteList !== undefined ? props.noteList.map(ConvertNote) : <p>Without Notes Yet</p>}</div>;

	return jsx;
};

export default NoteList;
