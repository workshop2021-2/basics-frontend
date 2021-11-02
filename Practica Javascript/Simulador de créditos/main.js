

//DOM elements data section
const inputRange = document.querySelector("#rangeId")
const rangeTitle = document.querySelector("#rangeTitle-Id")
const rate = document.querySelector("#rateId")
const inputName = document.querySelector("#nameId")
const inputCredit = document.querySelector('#creditId')
const btnCalculate = document.querySelector("#btn-CalculateId")

//DOM elements answer section
const resultSectionId = document.querySelector("#results-SectionId")
const answerName = document.querySelector("#usarNameId")
const answerRange = document.querySelector("#rateId-Answer")
const monthlyFee = document.querySelector("#monthlyFeeId")


/* Global */
const interesRate = [1.20,1.15,1,0.98]
const rateMsj = 'Tasa de interés:'
let totalRate = 1.2

//error messages and styles
const creditErrorStyle = "border: 1px solid #ff00008c;" 
const nameErrorMsj = "El nombre debe tener mínimo a 3 letras"
const nameErrorStyle = "border: 1px solid #ff00008c; width: 320px;" 

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
let credit =  inputCredit.value
const isName = validateName(name)
const isCredit = validateCredit(credit)

if(!isName || !isCredit){
    setNameCreditError(isName, isCredit)
    return
}
    showData()
}

//Clean the error styles for inputs
inputName.onclick = () =>{
    inputName.style.border = '1px solid #8db0d3'
    inputName.style.width = '100%'
    inputName.removeAttribute("placeholder")
}

inputCredit.onclick = () =>{
    inputCredit.style.border = '1px solid #8db0d3'
}

/* Error functions for input data */

//Validate inputs
function validateName(name){
    if(name == "" || name == null || name.length < 3 ){        
       return false
    } else{
        return true
    }
}

function validateCredit(credit){
    if(credit < 0 || isNaN(credit) || credit < 500000){
       return false
    } else{
        return true
    }
}

//Set inputs errors
const setNameCreditError = (isName, isCredit) =>{
    if(!isName && !isCredit){           
        inputCredit.setAttribute("style", creditErrorStyle)
        inputCredit.value = ""           
        inputName.setAttribute("style", nameErrorStyle)
        inputName.setAttribute("placeholder", nameErrorMsj)
        inputName.value = ""

    }else if(!isName && isCredit){

        inputName.setAttribute("style", nameErrorStyle)
        inputName.setAttribute("placeholder", nameErrorMsj)
        inputName.value = ""

    }  else{           
        inputCredit.setAttribute("style", creditErrorStyle)
        inputCredit.value = ""
    }         
}


/* Show the data */
const showData = () =>{
    answerName.innerHTML = `${inputName.value}`
    answerRange.value = `${totalRate}%`
    monthlyFee.value = calcMonthlyFee()
    resultSectionId.hidden = false
}

const calcMonthlyFee = () =>{



}