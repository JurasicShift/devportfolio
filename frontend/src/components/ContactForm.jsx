import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
	return (
		<div className="form">
			<div className="form__div">
				<form
					action="/contact"
					className="form__form"
					id="contactForm"
					method="POST"
				>
					<label htmlFor="contactName" className="form__label">
						Name
					</label>
					<input
						type="text"
						className="form__input"
						name="subject"
						id="contactName"
					/>
					<label htmlFor="contactEmail" className="form__label">
						E-mail
					</label>
					<input
						type="text"
						className="form__input"
						name="email"
						id="contactEmail"
					/>
					<label htmlFor="contactMessage" className="form__label">
						Message
					</label>
					<textarea
						className="form__input"
						name="text"
						id="contactText"
					></textarea>
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
