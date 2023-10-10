let butnEle = document.getElementById('convert-butn');
let inputEle = document.getElementById('temp-input');
let farenEle = document.getElementById('fahrenheit');
let celsiusEle = document.getElementById('celsius');
let errorEle = document.getElementById('error-mesg');
let formulaEle = document.getElementById('formula');
let resultEle = document.getElementById('result');

butnEle.addEventListener('click',function(){
    let tempVal = inputEle.value;
    let parsedTemp = parseFloat(tempVal);
    if(inputEle.value==="" || isNaN(parsedTemp)){
        errorEle.innerHTML = "*enter valid temperature";
        errorEle.classList.add('error-style');
        formulaEle.innerHTML = "";
        resultEle.innerHTML = "";
    }
    else{
        errorEle.innerHTML = "";
        resultEle.innerHTML = "";
        formulaEle.classList.add('formula');
        if(farenEle.checked==true){
            formulaEle.innerHTML = "Formula: C = 5/9(F-32)";
            let ans = (5/9)*(parsedTemp-32);
            ans = ans.toFixed(2);
            resultEle.innerHTML = `Result: ${ans} C`;
        }
        else{
            formulaEle.innerHTML = "Formula: F = (9/5 * C)+32";
            let ans = ((9/5)*parsedTemp)+32;
            ans = ans.toFixed(2);
            resultEle.innerHTML = `Result: ${ans} F`;
        }
        
    }
})