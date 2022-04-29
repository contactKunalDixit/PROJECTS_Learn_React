import React, { useState } from 'react';
import './new.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import noImagePic from '../../Images/no-image-icon-0.jpeg';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { userInputs, productInputs } from '../../formSource';

const New = () => {
	const [file, setFile] = useState('');
	return (
		<div className='newUser'>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<div className='newContainer'>
				<div className='wrapper_newContainer'>
					<div className='newTitle'>Add New User</div>
					<div className='newBottom'>
						<div className='newDP'>
							<img
								src={
									file
										? URL.createObjectURL(file)
										: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
								}
								alt=''
							/>
						</div>

						<div className='newInfoForm'>
							<form action='#'>
								<div className='formInput'>
									<label htmlFor={file}>
										Image:
										<DriveFolderUploadIcon></DriveFolderUploadIcon>
									</label>
									<input
										type='file'
										id='file'
										onChange={(e) => setFile(e.target.files[0])}
										style={{ display: 'none' }}
									/>
								</div>
								{userInputs.map((input) => (
									<div className='formInput' key={input.id}>
										<label>{input.label}</label>
										<input type={input.type} placeholder={input.placeholder} />
									</div>
								))}
								<button>Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
