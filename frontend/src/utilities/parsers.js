import React from 'react';


const generateRandomNumber = () => {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 11) + 30;
    return randomNumber;
};

const trimmer = (text, splitter, cloud) => {
    const trimmedText = text.replace(/^\.\n/, '');
    let finishTrim = trimmedText.replace(/^\n/, '');
    if(cloud) {
        const parsed = finishTrim.replace(/[,\.]/g, '');
        finishTrim = parsed;
    }
    const trimmed = finishTrim.split(splitter);
    return trimmed;
};


const parseCloud = text => {
    const data = text.map((word, idx) => {
        return {
            value: word,
            count: generateRandomNumber(),
        };
    });

    return data;
};

const parseParagraphs = (text, theme) => {
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

export {
    trimmer,
    parseCloud,
    parseParagraphs
}