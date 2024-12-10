import { Roboto } from 'next/font/google'
import './globals.css'
import Nav from './nav/page'
import { PalindromeContextProvider } from './context/palindromeContext'

export const metadata = {
    title: 'Challenge',
    description: 'Challenge homepage',
    keywords: "challenge, palindrome, palindromo, online"
}

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    styles: ["normal"],
    subsets: ["latin"]
})

export default function RootLayout({children}){
    return(
        <html lang="en">
            <body className={roboto.className}>
                <PalindromeContextProvider>
                    <Nav/>
                    {children}
                </PalindromeContextProvider>
            </body>
        </html>
    )
}