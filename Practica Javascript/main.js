

//Get dom elements
const range = document.querySelector("#rangeId")
const rangeTitle = document.querySelector("#rangeTitle-Id")

range.oninput = () =>{
    rangeTitle.innerHTML = `${range.value} meses` 
}