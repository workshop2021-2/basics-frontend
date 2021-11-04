//DOM elements data section
const inputRange = document.querySelector("#rangeId")
const rangeTitle = document.querySelector("#rangeTitle-Id")
const rate = document.querySelector("#rateId")
const inputName = document.querySelector("#nameId")
const inputCredit = document.querySelector('#creditId')
const btnCalculate = document.querySelector("#btn-CalculateId")

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
    const credit = inputCredit.value
    const isName = validateName(name)
    const isCredit = validateCredit(credit)

    if(!isName || !isCredit){
        setNameCreditError(isName, isCredit)
        return
    }
        showData(credit)
}

//Clean the error styles for inputs
inputName.onclick = () =>{
    inputName.style.border = '1px solid #8db0d3'
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
    if(credit < 0 || isNaN(credit) || credit < 500000 || credit > 10000000000){
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
const showData = (credit) =>{
        const rate = totalRate/100
        const userName = inputName.value
        const userNameCapLetter = userName.toUpperCase()
        answerName.innerHTML = `${userNameCapLetter}`
        answerRange.value = `${totalRate}%`
        let fee = calcMonthlyFee(credit,rate)    
        fillTableContent(credit,rate,fee)
        fee = new Intl.NumberFormat('es-CO').format(fee)
        monthlyFee.value = `${fee} $`
        resultArticle.hidden = false
        resultSectionId.hidden = false
}

//Calculate the Monthly fee
const calcMonthlyFee = (credit, rate) =>{
        const range = inputRange.value
        const feePow = Math.pow(1+rate, range)
        let fee = (credit*rate*feePow) /(feePow-1)
        fee = fee.toFixed()
        return fee
}

//Calculate table content
function calculateTableContent(credit,rate,fee){
        const months = inputRange.value
        let capitalPayment = 0
        let balance = credit
        let interest = 0
        const arrayContent = [{table_title: 'Periodo', values: []}, {table_title: 'Abono capital', values: []}, {table_title: 'Interés', values: []}, {table_title: 'Saldo', values: []}]
        arrayContent[0].values.push(0)
        arrayContent[1].values.push(0)
        arrayContent[2].values.push(0)
        arrayContent[3].values.push(balance)

    for ( let i = 1; i <= months; i++){ 

        interest = rate*balance
        capitalPayment = fee - interest
        balance = balance - capitalPayment      

        capitalPayment = capitalPayment.toFixed(2)
        interest = interest.toFixed(2)
        balance = balance.toFixed(2)

        arrayContent[0].values.push(i)
        arrayContent[1].values.push(capitalPayment)
        arrayContent[2].values.push(interest)

        if (i == months) {
            arrayContent[3].values.push(0)
        } else {            
            arrayContent[3].values.push(balance)
        }
    }
        return arrayContent
}

//Fill the table with content
const fillTableContent = (credit,rate, fee) =>{
        let trNodes = tblBody.childNodes         
        
        if (trNodes.length !== 1){           
           tblBody.innerHTML = ""             
        }     
        
    const months = inputRange.value       
    const  arrayContent = calculateTableContent(credit,rate,fee)
     for ( let i = 0; i <= months; i++){

        const tr = document.createElement('tr')
        const th = document.createElement('th')        
        const thText = document.createTextNode(`${arrayContent[0].values[i]}`)
        th.appendChild(thText)
        tr.appendChild(th)     

        for( let j = 1; j <= 3; j++){
            const td =  document.createElement('td')
            let content = arrayContent[j].values[i]
            content = new Intl.NumberFormat('es-CO').format(content)
            const tdText = document.createTextNode(`${content} $`)
            td.appendChild(tdText)
            tr.appendChild(td)
        }       
        tblBody.appendChild(tr)
     }
      
}


//display the table results
arrowImg.addEventListener('click', () =>{    
        let displayTable =  tableResults.style.display
        let transformImg =   arrowImg.style.transform 
        displayTable === "" || displayTable === "none"? (displayTable = "block" , transformImg = "rotate(180deg)") : (displayTable = "" , transformImg = "") 
        tableResults.style.display = displayTable
        arrowImg.style.transform = transformImg
})

