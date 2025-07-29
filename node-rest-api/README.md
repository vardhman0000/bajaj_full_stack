# Node REST API

This project is a Node.js application that implements a REST API with a POST method at the route `/bfhl`. The API processes an array of mixed data types and returns various structured information.

## Project Structure

```
node-rest-api
├── src
│   ├── app.js
│   ├── routes
│   │   └── bfhl.js
│   ├── controllers
│   │   └── bfhlController.js
│   ├── utils
│   │   └── dataProcessor.js
│   └── types
│       └── index.js
├── package.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd node-rest-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

## API Usage

### POST /bfhl

This endpoint processes an array sent in the request body. The expected request format is:

```json
{
  "data": [/* array of mixed data types */]
}
```

### Response

The API will return a JSON object containing the following fields:

- `status`: The status of the request.
- `userId`: The ID of the user making the request.
- `emailId`: The email ID of the user.
- `collegeRollNumber`: The college roll number of the user.
- `evenNumbers`: An array of even numbers extracted from the input.
- `oddNumbers`: An array of odd numbers extracted from the input.
- `uppercaseAlphabets`: An array of uppercase alphabetic characters.
- `specialCharacters`: An array of special characters.
- `sumOfNumbers`: The sum of all numeric values in the input array.
- `concatenatedString`: A string of alphabetical characters in reverse order with alternating caps.

### Example Request

```json
{
  "data": [1, "A", 2, "b", 3, "@", 4, "C", 5, "#"]
}
```

### Example Response

```json
{
  "status": "success",
  "userId": "12345",
  "emailId": "user@example.com",
  "collegeRollNumber": "CR123",
  "evenNumbers": [2, 4],
  "oddNumbers": [1, 3, 5],
  "uppercaseAlphabets": ["A", "C"],
  "specialCharacters": ["@"],
  "sumOfNumbers": 15,
  "concatenatedString": "CbA"
}
```

## License

This project is licensed under the MIT License.