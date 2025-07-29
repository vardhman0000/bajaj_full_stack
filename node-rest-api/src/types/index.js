export interface ApiResponse {
    status: string;
    userId: string;
    emailId: string;
    collegeRollNumber: string;
    evenNumbers: number[];
    oddNumbers: number[];
    uppercaseAlphabets: string[];
    specialCharacters: string[];
    sumOfNumbers: number;
    concatenatedString: string;
}

export interface ApiRequest {
    userId: string;
    emailId: string;
    collegeRollNumber: string;
    array: (number | string)[];
}