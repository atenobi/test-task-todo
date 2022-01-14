import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import UpdateMenu from "../UpdateMenu/UpdateMenu";

// styles
import './index..scss'

const ToDoItem = ({ item, removeItem, updateItem }) => {
	 const [update, setUpdate] = useState({
		 id: null,
		 value: '',
	 })

	const updateHandler = (value) => {
		updateItem(update, value);

		setUpdate({
			id: null,
			value: '',
		})
	}

	if (update.id) {
		return <UpdateMenu updateHandler={updateHandler} update={update.value} />
	}

	// unfinished hash searching

	// const findHash = () => {
	// 	const hash = item.value.match(/#\w+/gm).toString().replaceAll('#', '');
	// 	return hash;
	// }

	return (
		<>
			<div className='item_container'>
						<p
							key={item.id}
							className='item_text'
						>
							{item.value}
						</p>
					<div className='item_button_container'>
						<button
							className='item_update_button'
							onClick={() => setUpdate({ id: item.id, value: item.value })}
						>
							Update
						</button>
						<button
							className='item_delete_button'
							onClick={() => removeItem(item.id)}
						>
							Delete
						</button>
					</div>
			</div>
		</>
	)
}

ToDoItem.propTypes = {
	item: PropTypes.object.isRequired,
	removeItem: PropTypes.func.isRequired,
	updateItem: PropTypes.func.isRequired,
};

export default ToDoItem;
