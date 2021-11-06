import {arrowImg,inputName, inputCredit, tableResults} from './main.js'


//Clean the error styles for inputs
inputName.onclick = () =>{
    inputName.style.border = '1px solid #8db0d3'
    inputName.removeAttribute("placeholder")
}

inputCredit.onclick = () =>{
    inputCredit.style.border = '1px solid #8db0d3'
}

//display the table results
arrowImg.addEventListener('click', () =>{    
    let displayTable =  tableResults.style.display
    let transformImg =   arrowImg.style.transform 
    displayTable === "" || displayTable === "none"? (displayTable = "block" , transformImg = "rotate(180deg)") : (displayTable = "" , transformImg = "") 
    tableResults.style.display = displayTable
    arrowImg.style.transform = transformImg
})