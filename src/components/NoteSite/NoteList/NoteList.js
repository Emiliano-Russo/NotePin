import Styles from "./NoteList.module.css";

const NoteList = (props) => {
	function ConvertNote(note) {
		const jsx = (
			<button key={note.Title} onClick={() => props.onSelect(note.Title)}>
				{note.Title}
			</button>
		);
		return jsx;
	}

	const jsx = <div className={Styles.noteList}>{props.noteList !== undefined ? props.noteList.map(ConvertNote) : <p>Without Notes Yet</p>}</div>;

	return jsx;
};

export default NoteList;
