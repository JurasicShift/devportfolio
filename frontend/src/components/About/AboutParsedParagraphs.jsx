import React, {memo} from "react";
import PropTypes from 'prop-types';

const ParsedParagraphs = ({text, theme}) => {
    const parsedParagraphs = text.map((paragraph, index) => {
        const parsedParagraph = paragraph.replace(/&apos;/g, "'");
        const className =
            index === 0 && theme === false ? 'aboutme__text has-dropcap' : 'aboutme__text';
        return (
            <p
                className={className}
                key={index}
                dangerouslySetInnerHTML={{ __html: parsedParagraph }}
            />
        );
    });

    return parsedParagraphs;

};

ParsedParagraphs.propTypes = {
    text: PropTypes.array,
    theme: PropTypes.bool
}

export default memo(ParsedParagraphs)