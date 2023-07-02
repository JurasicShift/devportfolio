import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Background from '../Utilities/Background';
import { Error } from './ErrorPage';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			message: 'no message yet',
		};
	}

	handleNavigateBack = () => {
		window.location.href = '/';
	};

	componentDidCatch(error) {
		this.setState({ hasError: true, message: error.message });
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<Background />
                    <Error message={this.state.message} fn={this.handleNavigateBack}/>
				</>
			);
		}

		return this.props.children;
		
	}
}
ErrorBoundary.propTypes = {
	children: PropTypes.node,
};
export default ErrorBoundary;
