import React from "react";
import './PageMoniker.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function PageMoniker(props) {

    const linkStyle = {
        textDecoration: "none",
        color: "white",
        zIndex: "2",
        textShadow: "none"
    }

    return (
        <section className="page__moniker">
        <div className="page__title" style={props.display ? {opacity: "1"} : null}>
           <Link to="/michaelwhytewebdev/about" style={linkStyle} > {props.page} </Link>
        </div>
    </section>
    )
}

PageMoniker.propTypes = {
    page: PropTypes.string,
    display: PropTypes.bool
}

export default PageMoniker;