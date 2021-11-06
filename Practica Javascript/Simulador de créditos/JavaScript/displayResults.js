import { totalRate, inputName, answerName, answerRange, tblBody, inputRange,monthlyFee, resultArticle, resultSectionId} from "./main.js"
import { calcMonthlyFee, fillTableContent } from "./computations.js"

/* Show the data */
const showData = (credit) =>{
    const rate = totalRate/100
    const userName = inputName.value
    const userNameCapLetter = userName.toUpperCase()
    answerName.innerHTML = `${userNameCapLetter}`
    answerRange.value = `${totalRate}%`
    let fee = calcMonthlyFee(credit,rate,inputRange)    
    fillTableContent(credit, rate, fee, tblBody, inputRange)
    fee = new Intl.NumberFormat('es-CO').format(fee)
    monthlyFee.value = `${fee} $`
    resultArticle.hidden = false
    resultSectionId.hidden = false
}

export {showData}