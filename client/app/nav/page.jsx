'use client'
import '../css/nav.css'
import menu from '../assets/menu.png'
import { useContext, useEffect, useState } from 'react'
import PalindromeContext from '../context/palindromeContext'
import { getHistoryRequest } from '@/api/requests'
import check from '../assets/check.png'
import close from '../assets/close.png'

const Nav = () => {

    const {palindromesHistory, setPalindromesHistory} = useContext(PalindromeContext)

    useEffect(() => { //carga el historial de palindromos ingresados antes de que termine de cargar la pagina
        const getHistory = async () => {
            const res = await getHistoryRequest()
            setPalindromesHistory(res.data)
        }
        getHistory()
    },[])


    const openNav = () => { //abre la navegacion lateral para ver el historial de palindromos
        document.getElementsByClassName("palindromeHistory")[0].style.transform = 'translateX(0px)';
    }

    const closeNav = () => { //cierra la navegacion lateral
        document.getElementsByClassName("palindromeHistory")[0].style.transform = 'translateX(400px)'
    }

    return(
        <>
            <button className='absolute right-6 top-3' onClick={() => openNav()}><img src={menu.src} alt=""></img></button>
            {palindromesHistory.length > 0 && 
            <nav className="palindromeHistory bg-slate-100" key={1}>
                <div className='relative h-8 bg-slate-200 flex items-center'>
                    <button className='absolute right-3' onClick={() => closeNav()}><img src={close.src}></img></button>
                </div>
                {palindromesHistory.map((p) => 
                <div className={p.isPalindrome === 1 ?'history-container relative p-3' : 'history-container relative p-3 bg-slate-50'} key={p._id}>
                    <p className='text-xl'>{p.phrase}</p>
                    {p.isPalindrome ?
                    <div className='pals-A w-fit flex bg-green-700 text-white p-2 rounded-lg'>
                        <img className='w-6' src={check.src} alt=""></img>
                        <p className='ml-3'>Is palindrome</p>
                    </div>
                    :
                    <div className='pals-B w-fit flex bg-orange-500 p-2 rounded-lg'>
                        <img className='w-6' src={check.src} alt=""></img>
                        <p className='ml-3'>Is not palindrome</p>
                    </div>
                    }
                </div>)}
            </nav>}
              
            
        </>
    )
}

export default Nav