

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

export {
    trimmer,
    parseCloud,
}