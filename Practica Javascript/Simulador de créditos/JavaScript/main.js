//IMPORT
import  {validateName, validateCredit, setNameCreditError} from './validations.js'
import { showData } from './displayResults.js'

//DOM elements data section
const inputRange = document.querySelector("#rangeId")
const rangeTitle = document.querySelector("#rangeTitle-Id")
const rate = document.querySelector("#rateId")
const btnCalculate = document.querySelector("#btn-CalculateId")
const inputName = document.querySelector("#nameId")
const inputCredit = document.querySelector('#creditId')

//DOM elements answer section
const resultArticle = document.querySelector("#resultsId")
const resultSectionId = document.querySelector("#results-SectionId")
const answerName = document.querySelector("#usarNameId")
const answerRange = document.querySelector("#rateId-Answer")
const monthlyFee = document.querySelector("#monthlyFeeId")
const arrowImg = document.querySelector('#arrowImg-Id')
const tableResults = document.querySelector('#tableResultsId')
const tblBody = document.querySelector("#tbodyId")

/* Global */
const interesRate = [1.20,1.15,1,0.98]
const rateMsj = 'Tasa de interés:'
let totalRate = 1.2 

//Show a dinamic values when input range change
rate.innerHTML = `${rateMsj} ${interesRate[0]}%`
inputRange.oninput = () =>{
    rangeTitle.innerHTML = `${inputRange.value} meses`     
     
     if(inputRange.value >= 22 && inputRange.value <= 34){
        rate.innerHTML = `${rateMsj} ${interesRate[0]}%`
        totalRate = interesRate[0]
    } 
    if(inputRange.value > 34 && inputRange.value <= 46){
        rate.innerHTML = `${rateMsj} ${interesRate[1]}%`
        totalRate = interesRate[1]
    }
    if(inputRange.value > 46 && inputRange.value <= 58){
        rate.innerHTML = `${rateMsj} ${interesRate[2]}%`
        totalRate = interesRate[2]
    } 
    if(inputRange.value > 58){
        rate.innerHTML = `${rateMsj} ${interesRate[3]}%`
        totalRate = interesRate[3]
    }     
}

//Activate the calculation answer
btnCalculate.onclick = () =>{
    const name =  inputName.value
    const credit = inputCredit.value
    const isName = validateName(name)
    const isCredit = validateCredit(credit)

    if(!isName || !isCredit){
        setNameCreditError(isName, isCredit, inputCredit, inputName)
        return
    }
        showData(credit)
}

export {arrowImg,inputName, inputCredit, tableResults, totalRate, tblBody, inputRange, answerName, answerRange, monthlyFee, resultArticle, resultSectionId}