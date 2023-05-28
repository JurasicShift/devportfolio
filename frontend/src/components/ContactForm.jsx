import React, { useState, useRef } from 'react';
import './ContactForm.css';
import { Validation, isObjectEmpty } from '../hooks/validation';

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

		if (isObjectEmpty(errorMessage)) {
			setErrors(errorMessage);
			fetch('http://localhost:5000/contact', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(values),
			})
				.then(result => result.json())
				.then(info => console.log(info))
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
						style={errors.name ? errorShow : errorHide}
					>
						{errors.name}
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
						style={errors.message ? errorShow : errorHide}
					>
						{errors.message}
					</p>
				</form>
				<div className="form__btn">
					<button type="submit" form="contactForm" className="form__btn-btn">
						SEND
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
