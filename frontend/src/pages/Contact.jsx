import React from 'react';
import './Contact.css';
import ContactForm from '../components/Contact/ContactForm';
import PageTitle from '../components/Utilities/PageTitle';
import Icons from '../components/Utilities/Icons';
import Spinner from '../components/Utilities/Spinner';
import useReadyState from '../hooks/useReadyState';
import { titleTab } from '../utilities/titleFn';

const Contact = () => {
	const [loading] = useReadyState();
	titleTab('Contact');
	return (
		<>
			{loading ? (
				<Spinner height="100px" width="100px" lg={true} />
			) : (
				<div>
					<div className="contact">
						<PageTitle text="Contact" />
					</div>
					<div className="contact__form">
						<ContactForm />
					</div>
					<Icons />
				</div>
			)}
		</>
	);
};

export default Contact;
