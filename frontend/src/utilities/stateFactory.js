const stateFactory = str => {
    const name = str.split('');
    const nameArr = name.map(letter => {
        return {
            letter: letter,
            visible: false,
        };
    });

return nameArr;
};

export default stateFactory;