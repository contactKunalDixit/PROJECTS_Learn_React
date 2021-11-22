import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastiItem = () => {
	const notify = () => {
		toast.info(
			'Covid-19 Guidlines: " The patrons are requested to follow the current guidelines laid by Singapore govt. authorities ',
			{
				position: 'top-center',
				autoClose: false,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: 1,
			}
		);
	};

	useEffect(() => {
		return notify;
	}, []);
	return (
		<div>
			{/* <button onClick={notify}>Notify</button> */}

			<ToastContainer
				position='top-center'
				autoClose={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
			/>
		</div>
	);
};

export default ToastiItem;
