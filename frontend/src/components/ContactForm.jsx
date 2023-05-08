import React, { useState } from 'react';
import './ContactForm.css';
import { Validation, isObjectEmpty } from '../hooks/validation';

const ContactForm = () => {
	const [errors, setErrors] = useState({});

	const handleSubmit = e => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const values = Object.fromEntries(data.entries());

		const errorMessage = Validation(values);

		if (isObjectEmpty(errorMessage)) {
			fetch('http://localhost:5000/contact', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(values),
			})
				.then(result => result.json())
				.then(info => console.log(info));
		} else {
			setErrors(errorMessage);
		}
	};
	return (
		<div className="form">
			<div className="form__div">
				<form
					action="/contact"
					className="form__form"
					id="contactForm"
					method="POST"
					onSubmit={handleSubmit}
				>
					<label htmlFor="contactName" className="form__label">
						Name
					</label>
					<input
						type="text"
						className="form__input"
						name="name"
						id="contactName"
					/>
					<div className="form__error">
					{errors.name && <p style={{color: "red"}}>{errors.name}</p>}
					</div>
					<label htmlFor="contactEmail" className="form__label">
						E-mail
					</label>
					<input
						type="text"
						className="form__input"
						name="email"
						id="contactEmail"
					/>
					<div className="form__error">
					{errors.email && <p style={{color: "red"}}>{errors.email}</p>}
					</div>
					<label htmlFor="contactMessage" className="form__label">
						Message
					</label>
					<textarea
						className="form__input"
						name="message"
						id="contactText"
					></textarea>
					<div className="form__error">
					{errors.message && <p style={{color: "red"}}>{errors.message}</p>}
					</div>
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
