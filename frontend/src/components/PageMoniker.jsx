import React from "react";
import './PageMoniker.css';
import PropTypes from 'prop-types';

function PageMoniker(props) {

    return (
        <section className="page__moniker">
        <div className="page__title" id={props.pageId}>
            {props.page}
        </div>
    </section>
    )
}

PageMoniker.propTypes = {
    page: PropTypes.string,
    pageId: PropTypes.string
}

export default PageMoniker;