// step-1: selecting all the elements using their id

var initialPrice = document.querySelector("#initial-price");
var stocks = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-button");
var outputBox = document.querySelector("#output-box");

// function for calculating profit and loss
function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) 
    {
        //loss logic
        var loss = (initial - current) * quantity; //divide this by quantity
        var lossPercentage = (loss / initial) * 100;
        // outputBox.innerHTML = 'Hiiiiiiiii';
        showOutput(`Loss = ${loss} and the loss% = ${lossPercentage}%`);
    } 
    else if (current > initial) 
    {
        //profit logic
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial)*100;
        showOutput(`profit = ${profit} and the profit% = ${profitPercentage}%`);
    } 
    else 
    {
        // outputBox.style.color = '';
        showOutput(`No pain, no gain and no gain, no pain`);
    }
}

//function to show output
function showOutput(message){
    outputBox.innerHTML = message;
}


function clickHandler(){
    
    var ip = Number(initialPrice.value) ;
    var qty = Number(stocks.value) ;
    var curr = Number(currentPrice.value) ; 

    //if all the values are greater than zero only than this will work
    if (ip>0 && qty>0 && curr>0){
        calculateProfitAndLoss(ip, qty, curr);
    }
    else{
        showOutput(`please fill all the fields`);
    }

    
    
}

submitBtn.addEventListener('click', clickHandler);