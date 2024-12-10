"use client"
const { createContext, useState } = require("react");

const PalindromeContext = createContext()

export const PalindromeContextProvider = ({children}) => {

    const [palindromesHistory, setPalindromesHistory] = useState([])

    return(
        <PalindromeContext.Provider value={{palindromesHistory, setPalindromesHistory}}>{children}</PalindromeContext.Provider>
    )
}

export default PalindromeContext