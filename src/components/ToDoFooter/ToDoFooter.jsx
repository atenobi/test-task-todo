import React, {useState} from "react";

// data
import { infoArray } from "../../constants/infoArray";

// style
import './index.scss';

const ToDoFooter = () => {
	const [infoStatus, setInfoStatus] = useState(false);

	const showInfo = (e) => {
		e.preventDefault();
		setInfoStatus(!infoStatus);
	}

	if (infoStatus) {
		return (
			<>
				<div className='footer_info_container'>
					{infoArray.length > 0 && infoArray.map((el, index) => (
							<p key={index} className='footer_info_text'>{el}</p>
						)
					)}
					<button
						className='footer_button'
						onClick={(e) => showInfo(e)}
					>
						&#10006;
						{/* close (cross) */}
					</button>
				</div>
			</>
		)
	}

	return (
		<>
			<div
				className='footer_container'
			>
				<button
					className='footer_button'
					onClick={(e) => showInfo(e)}
				>
					&#8505;
					{/* info (i) */}
				</button>
			</div>
		</>
	)
};

export default ToDoFooter;
