# Bajaj Finserv Full Stack Assessment – Backend API

This repository contains the backend API solution for the **Bajaj Finserv Full Stack Assessment**. The API is built using **Node.js** and **Express.js** as per the assessment requirements. It processes an input array and returns user information, categorized data, and computed results as specified in the problem statement.

---

## Tech Stack

- **Backend:** Node.js
- **Framework:** Express.js
- **Hosting:** Render

---

## Project Structure

```
node-rest-api/
  ├── src/
  │   ├── app.js                # Express app entry point
  │   ├── routes/
  │   │   └── bfhl.js           # API route
  │   └── controllers/
  │       └── bfhlController.js # Main API logic
  ├── package.json              # Project config and dependencies
  ├── .gitignore                # Git ignore file
  └── README.md                 # Project documentation
```

---

## Setup & Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-rest-api.git
cd node-rest-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
```

The API will be available at `https://bajaj-full-stack-npxt.onrender.com/bfhl`.

---

## 🧪 API Testing

You can test using [Postman](https://www.postman.com/).

### Steps to Test Using Postman

1. Open Postman and click on "New" > "HTTP Request".
2. Set the request type to `POST`.
3. Enter the URL: `https://bajaj-full-stack-npxt.onrender.com/bfhl`
4. Go to the "Body" tab, select "raw" and choose "JSON" from the dropdown.
5. Enter your request body, for example:
   ```json
   {
    "data": ["a","1","334","4","R", "$"]
   }
   ```
6. Click "Send".
7. You should see the API response in the lower section of Postman.

---

## Example

### Request

```
POST /bfhl
Content-Type: application/json

{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```

### Response

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

---

## Notes

- Update `user_id`, `email`, and `roll_number` in `src/controllers/bfhlController.js` with your own details if needed.
- The API handles errors gracefully and returns appropriate status codes and messages.
- For deployment, set the root directory to `node-rest-api` if using Render or similar platforms.

---

