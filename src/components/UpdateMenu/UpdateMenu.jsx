import React, { useState } from "react";
import PropTypes from 'prop-types'

// style
import  './index.scss'

const UpdateMenu = ({ updateHandler, update }) => {
	let [userString, setUserString] = useState(update);

	const inputHandler = e => setUserString(e.currentTarget.value);

	const submitHandler = (e) => {
		e.preventDefault();
		updateHandler(userString);
	};

	const enterKeyHandler = (e) => {
		if (e.key === 'Enter') {
			submitHandler(e);
		}
	};

	return (
		<>
			<div className="update_menu">
				<form action={"update_to_do"}
				      onSubmit={submitHandler}
				      onKeyDown={enterKeyHandler}
				>
					<input
						className='update_menu_input'
						value={userString}
						type="text"
						aria-multiline={true}
						placeholder='Update to-do'
						onInput={inputHandler}
					/>
					<button
						className='update_menu_button'
						type='submit'
					>
						Update
					</button>
				</form>
			</div>
		</>
	)
};

UpdateMenu.propTypes = {
	updateHandler: PropTypes.func.isRequired,
	update: PropTypes.string.isRequired,
}

export default UpdateMenu;