import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

// style
import "./index.scss";

const ToDoSearchMenu = ({ toDoArr, setFindedItems }) => {
	const [userString, setUserString] = useState('');

	const inputHandler = e => setUserString(e.currentTarget.value);

	useEffect(() => {
		if (userString && toDoArr.length > 0) {
			setFindedItems([...toDoArr.filter((el) => el.value.includes(userString))]);
		} else {
			setFindedItems([]);
		}
	}, [userString, toDoArr]);

	// default render searching menu
	return (
		<>
			<div className="search_menu">
				<form
					action={"create_to_do"}
					className='search_menu_form'
				>
					<h2 className='searching_result_text'>Looking for something?</h2>
					<textarea
						className='search_menu_input'
						value={userString}
						aria-multiline={true}
						placeholder='&#9906;'  // magnifying glass
						onInput={inputHandler}
					/>



				</form>
			</div>
		</>
	)
};

ToDoSearchMenu.propTypes = {
	toDoArr: PropTypes.array.isRequired,
	setFindedItems: PropTypes.func.isRequired,
};

export default ToDoSearchMenu;
