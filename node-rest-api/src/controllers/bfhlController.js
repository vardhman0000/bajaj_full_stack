exports.processArray = (req, res) => {
    try {
        const { data } = req.body;
        if (!Array.isArray(data)) {
            return res.status(400).json({
                status: "error",
                is_success: false,
                message: "Input must be an array"
            });
        }

        // User details (replace with your actual details)
        const full_name = "john_doe";
        const dob = "17091999"; // ddmmyyyy
        const email = "john@xyz.com";
        const roll_number = "ABCD123";

        // Helper functions
        const isNumeric = val => /^-?\d+$/.test(val);

        // Processing
        const even_numbers = data
            .filter(item => isNumeric(item))
            .map(item => item.toString())
            .filter(numStr => parseInt(numStr) % 2 === 0);

        const odd_numbers = data
            .filter(item => isNumeric(item))
            .map(item => item.toString())
            .filter(numStr => parseInt(numStr) % 2 !== 0);

        const alphabets = data
            .filter(item => typeof item === 'string' && /^[a-zA-Z]+$/.test(item))
            .map(str => str.toUpperCase());

        const special_characters = data
            .filter(item => typeof item === 'string' && /[^a-zA-Z0-9]/.test(item) && !/^[a-zA-Z]+$/.test(item) && !isNumeric(item));

        // Sum as string
        const sum = data
            .filter(item => isNumeric(item))
            .reduce((acc, curr) => acc + parseInt(curr), 0)
            .toString();

        // Concatenation of all alphabetical characters in reverse order, alternating caps
        const alphaChars = data
            .filter(item => typeof item === 'string' && /^[a-zA-Z]+$/.test(item))
            .join('')
            .split('');
        const concat_string = alphaChars
            .reverse()
            .map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
            .join('');

        res.status(200).json({
            is_success: true,
            user_id: `${full_name.toLowerCase()}_${dob}`,
            email,
            roll_number,
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum,
            concat_string
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            is_success: false,
            message: "Internal server error"
        });
    }
};