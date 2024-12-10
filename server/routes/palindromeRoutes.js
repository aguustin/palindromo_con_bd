import { Router } from "express";
import { deleteHistoryController, getHistoryController, isPalindromeController } from "../controllers/palindromeController.js";

const router = Router()

router.post('/ispalindrome', isPalindromeController) //route que lleva al controlador que guarda en la base de datos las palabras o frases que el usuario ingreso

router.get('/getHistory', getHistoryController) //recupera todas las palabras o frases que alguna vez ingreso el usuario

router.delete('/deleteHistory', deleteHistoryController) //borra el historial (solo utilizado en postman con el fin de hacer pruebas ya que esta funcionalidad no se pidio en el challenge)

export default router