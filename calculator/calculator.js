let resultP = document.getElementById('result');
let resultStr = '';
let resultTextContent = '';

//get the value of button
let clickedBtn = document.querySelector('.gridContainer');
clickedBtn.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') { // to ensure the code runs only when clicked on button
        resultTextContent = e.target.textContent; //get the text content of clicked button
        resultStr += resultTextContent;
        resultP.innerText = resultStr;
        if(resultTextContent == 'Clear') {
            clearP();
        }

        console.log(e.target.textContent); //button hasn't value attribute, rather it has textContent.
    }
});


//calculation functions

//addition
const sum = (a,b) => {
    return a+b;
}

//subtraction
const sub = (a,b) => {
    return a-b;
}

//multiplication
const mul = (a,b) => {
    return a*b;
}

//division
const div = (a,b) => {
    return a/b;
}


//clear function
const clearP = () => {
    resultStr = ''; 
    resultP.innerText = '';
}