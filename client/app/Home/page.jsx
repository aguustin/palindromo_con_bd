"use client"
import { checkPalindromeRequest } from "@/api/requests.js"
import '../css/homepage.css'
import { useContext, useEffect, useState } from "react"
import PalindromeContext from "../context/palindromeContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
 
    const {palindromesHistory, setPalindromesHistory} = useContext(PalindromeContext)  //estado global de la aplicacion para ver las frases y su estado

    const showToastIsPalindrome = () => { //notificacion de frase palindroma
        toast("Is a palindrome!", {
          position: "top-left",
          className: "toast-message-palindrome"
        });
    };

    const showToastIsNotPalindrome = () => { //notificacion de frase NO palindroma
        toast("Not a palindrome!", {
          position: "top-left",
          className: "toast-message-not-palindrome"
        });
    };

    const emptyPalindromeNotification = () => { //notificacion de que falta palabra o frase
        toast.warning("Please enter a word or phrase", {
          position: "bottom-center",
          className: "empty-palindrome"
        });
    };

    const checkPalindromeFunction = async (e) => { //funcion que comprueba si hay palabra o frase y hace la peticion http en /api/request.js para guardar estas en la base de datos creada
        e.preventDefault()
        const palindrome = e.target.checkPalindrome.value

        if(palindrome.length <= 0){
            emptyPalindromeNotification()
        }else{
            const res = await checkPalindromeRequest(palindrome)
            setPalindromesHistory([...palindromesHistory, res.data])
            console.log(res.data.isPalindrome)
            if(res.data.isPalindrome === 0){
                showToastIsNotPalindrome()
            }else{
                showToastIsPalindrome()
            }
        }
    }



    return(
        <>
        <div className="form-container text-center mx-auto self-auto bg-slate-100 pr-6 pl-6 pt-3 pb-3">
            <h1>Palindrome challenge</h1>
            <form onSubmit={(e) => checkPalindromeFunction(e)}>
                <input  className="shadow-slate-200 w-full mt-12" type="text" name="checkPalindrome"></input>
                <button className="bg-orange-500 text-white pr-6 pl-6 pt-3 pb-3 rounded-lg mt-12" type="submit">Check</button>
            </form>
        </div>
        <ToastContainer/>
        </>
    )
}