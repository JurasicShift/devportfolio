import React, { useState, useRef } from 'react';
import './ContactForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Validation, isObjectEmpty } from '../hooks/validation';
const baseUrl = 'http://localhost:5000';

const ContactForm = () => {
	const [errors, setErrors] = useState({});
	const formRef = useRef(null);
	
	const onClear = () => {
		formRef.current.reset();
	}

	const handleSubmit = e => {
		e.preventDefault();
		
		const data = new FormData(e.currentTarget);
	
		const values = Object.fromEntries(data.entries());
		const errorMessage = Validation(values);
		const toastOptions = {
			position: "top-right",
			autoClose: 2500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			}

		if (isObjectEmpty(errorMessage)) {
			setErrors(errorMessage);
			fetch(`${baseUrl}/contact`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(values),
			})
				.then(result => {
					if(!result.ok) {
						return toast.warn("Sorry Something Went Wrong!", toastOptions);
					}
					return result.json()
				})
				.then((info) => {
					if(info.status === 200) {
						toast.info("Message Sent!", toastOptions);
					}

					if(info.status === 400) {
						toast.warn("Sorry Message Failed!", toastOptions);
					}
				} 
				)
				.then(onClear());
		} else {
			setErrors(errorMessage);
		}
	};

	const errorShow = {
		opacity: '1',
	};

	const errorHide = {
		opacity: '0',
	};
	return (
		<div className="form">
			<div className="form__div">
				<form className="form__form" id="contactForm" ref={formRef} onSubmit={handleSubmit}>
					<label htmlFor="contactSubject" className="form__label">
						Subject
					</label>
					<input
						type="text"
						className="form__input"
						name="subject"
						id="contactName"
					/>
					<p
						className="form__error"
						style={errors.subject ? errorShow : errorHide}
					>
						{errors.subject}
					</p>
					<label htmlFor="contactEmail" className="form__label">
						E-mail
					</label>
					<input
						type="text"
						className="form__input"
						name="email"
						id="contactEmail"
					/>
					<p
						className="form__error"
						style={errors.email ? errorShow : errorHide}
					>
						{errors.email}
					</p>
					<label htmlFor="contactText" className="form__label">
						Message
					</label>
					<textarea
						className="form__input"
						name="text"
						id="contactText"
					></textarea>
					<p
						className="form__error"
						style={errors.text ? errorShow : errorHide}
					>
						{errors.text}
					</p>
				</form>
				<div className="form__btn">
					<button type="submit" form="contactForm" className="form__btn-btn">
						SEND
					</button>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ContactForm;
