import React from "react";

// style
import  './index.scss'

const ToDoMainMenu = () => {
	return (
		<>
			<div className="main_menu">
				<form action={"create_to_do"}>
					<input
						className='main_menu_input'
						type="text"
						aria-multiline={true}
						placeholder='Write to-do here'
					/>
					<button
						className='main_menu_button'
						type='submit'
					>
						Create to-do
					</button>
				</form>
			</div>
		</>
	)
};

export default ToDoMainMenu;
