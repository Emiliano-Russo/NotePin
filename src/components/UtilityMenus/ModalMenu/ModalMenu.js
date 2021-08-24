import React from "react";
import "./ModalMenu.css";

function ModalMenu() {
	return (
		<React.Fragment>
			<button id="myBtn">Open Modal</button>

			<div id="myModal" class="modal">
				<div class="modal-content">
					<span class="close">&times;</span>
					<p>Some text in the Modal..</p>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ModalMenu;
