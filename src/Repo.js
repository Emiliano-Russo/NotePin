export function SaveNote(Note) {
	localStorage.setItem(Note.Title, JSON.stringify(Note));
}

export function DeleteNote(Note) {
	localStorage.removeItem(Note.Title);
}

export function GetAllNotes() {
	const notes = [];
	for (var i = 0; i < localStorage.length; i++) {
		// do something with localStorage.getItem(localStorage.key(i));
		const key = localStorage.key(i);
		const note = JSON.parse(localStorage[key]);
		notes.push(note);
	}
	return notes;
}
