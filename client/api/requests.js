import axios from "axios";

export const checkPalindromeRequest = (palindrome) => axios.post('http://localhost:4000/ispalindrome/',  {palindrome}, {
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getHistoryRequest = () => axios.get('http://localhost:4000/getHistory')