import React, {useState} from "react";
import PropTypes from "prop-types";

// styles
import './index..scss'

const ToDoItem = ({ item, removeItem }) => {

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
					>
						Update
					</button>
					<button
						className='item_delete_button'
						onClick={() => {removeItem(item.id)}}
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
};

export default ToDoItem;
