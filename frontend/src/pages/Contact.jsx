import React from 'react';
import './Contact.css';
import ContactForm from '../components/Contact/ContactForm';
import PageTitle from '../components/Utilities/PageTitle';
import Icons from '../components/Utilities/Icons';
import Spinner from '../components/Utilities/Spinner';
import useReadyState from '../hooks/useReadyState';

const Contact = () => {
	const [loading] = useReadyState();

	return (
		<>
			{loading ? <Spinner height="100px" width="100px" lg={true} /> :
			<div className="contact">
				<PageTitle text="Contact" />
				<ContactForm />
				<Icons />
			</div>}
		</>
	);
};

export default Contact;
