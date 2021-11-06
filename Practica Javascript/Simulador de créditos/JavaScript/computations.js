//Calculate the Monthly fee
const calcMonthlyFee = (credit, rate, inputRange) =>{
    const range = inputRange.value
    const feePow = Math.pow(1+rate, range)
    let fee = (credit*rate*feePow) /(feePow-1)
    fee = fee.toFixed()
    return fee
}

//Calculate table content
function calculateTableContent(credit, rate, fee, inputRange){
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
const fillTableContent = (credit, rate, fee, tblBody, inputRange) =>{
    let trNodes = tblBody.childNodes         
    
    if (trNodes.length !== 1){           
       tblBody.innerHTML = ""             
    }     
    
const months = inputRange.value       
const  arrayContent = calculateTableContent(credit,rate,fee, inputRange)
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


export {calcMonthlyFee, calculateTableContent, fillTableContent}