//Error messages and styles
const creditErrorStyle = "border: 1px solid #ff00008c;" 
const nameErrorMsj = "El nombre debe tener mínimo a 3 letras"
const nameErrorStyle = "border: 1px solid #ff00008c; width: 320px;"


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

const setNameCreditError = (isName, isCredit, inputCredit, inputName) =>{
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

export { validateName, validateCredit, setNameCreditError}
