import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
	const [message, setMessage] = useState(false);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setMessage(true);
	};
	return (
		<div className='contact' id='contact'>
			<div className='left'>
				<img src='assets/shake.svg' alt='' />
			</div>
			<div className='right'>
				<h1>Contact</h1>
				<div className='contactBox'>
					<div className='highBox'>
						<h4>Email: contactkunaldixit@gmail.com</h4>
					</div>
					<div className='highBox'>
						<h4>Phone: +65 90301206</h4>
					</div>
					<div className='highBox'>
						<h4>
							Linkedin:
							<a
								href='https://www.linkedin.com/in/contact-kunal-dixit'
								target='_blank'
								rel='noopener noreferrer'
							>
								www.linkedin.com/in/contact-kunal-dixit
							</a>
						</h4>
					</div>
					<div className='highBox'>
						<h4>
							Github:
							<a
								href='https://github.com/contactKunalDixit'
								target='_blank'
								rel='noopener noreferrer'
							>
								www.github.com/contactKunalDixit
							</a>
						</h4>
					</div>
					{/* 				
				<form onSubmit={onSubmitHandler}>
					<input type='text' placeholder='Email' />
					<textarea placeholder='Message'></textarea>
					<button type='submit'>Send</button>
					{message && <span>Thanks, I'll reply ASAP :)</span>}
				</form> */}
				</div>
			</div>
		</div>
	);
};

export default Contact;
