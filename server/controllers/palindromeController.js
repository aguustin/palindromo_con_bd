import palindromes from "../models/palindromeModel.js";

export const isPalindromeController = async (req, res) => {
    const {palindrome} = req.body;   //obtiene el dato enviado por el usuario

    let re = /[^a-zA-Z0-9]/g; //toma todos los caracteres especiales que no sean letras ni numeros
    let lowRegStr = palindrome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(re, ''); //quita el acento a las letras y reemplaza los caracteres especiales por vacio (los elimina)
    let reverseStr = lowRegStr.split('').reverse().join(''); //invierte la palabra o frase ingresada
    
    if(reverseStr === lowRegStr){
        
        const a = await palindromes.create({
            phrase: palindrome,
            isPalindrome: 1
        })
        console.log(a)
        res.status(200).json(a)
    }else{
        const a = await palindromes.create({
            phrase: palindrome,
            isPalindrome: 0
        })

        res.status(200).json(a)
    }

}

export const getHistoryController = async (req, res) => {  //obtiene el historial de palindromos ingresados
    const response = await palindromes.find({})

    res.send(response)
}

export const deleteHistoryController = async (req, res) => { //borra historial
    await palindromes.deleteMany()
    res.sendStatus(200)
}