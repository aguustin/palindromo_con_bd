import mongoose from "mongoose";

const palindromeSchema = new mongoose.Schema({
    phrase:{ type: String},
    isPalindrome:{type: Number}
})

export default mongoose.model("palindromes", palindromeSchema)