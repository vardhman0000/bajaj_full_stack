function processArray(inputArray) {
    const response = {
        status: 'success',
        userId: null,
        emailId: null,
        collegeRollNumber: null,
        evenNumbers: [],
        oddNumbers: [],
        uppercaseAlphabets: [],
        specialCharacters: [],
        sumOfNumbers: 0,
        concatenatedString: ''
    };

    inputArray.forEach(item => {
        if (typeof item === 'number') {
            response.sumOfNumbers += item;
            if (item % 2 === 0) {
                response.evenNumbers.push(item);
            } else {
                response.oddNumbers.push(item);
            }
        } else if (typeof item === 'string') {
            if (/^[A-Z]$/.test(item)) {
                response.uppercaseAlphabets.push(item);
            } else if (/[^a-zA-Z0-9]/.test(item)) {
                response.specialCharacters.push(item);
            } else {
                response.concatenatedString += item;
            }
        }
    });

    response.concatenatedString = response.concatenatedString
        .split('')
        .reverse()
        .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
        .join('');

    return response;
}

module.exports = {
    processArray
};