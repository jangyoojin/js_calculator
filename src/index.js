
var num = [0];
var oper = "";
var i = 0;


function reset() {
    num = [0];
    oper = "";
    i = 0;    
    document.getElementsByClassName('calc__display')[0].innerText = "";
}

function number(ele){
    num[i] = num[i]*10 + ele;
    document.getElementsByClassName('calc__display')[0].innerText += ele;
}
function operator(ele){
    oper += ele;
    num.push(0);
    i++;
    document.getElementsByClassName('calc__display')[0].innerText += ele;
}

function cal(){
    var result = num[0];
    for(var j=1;j<=i;j++){
        switch(oper[j-1]){
            case "+":
                result += num[j];
                break;
            case "-":
                result -= num[j];
                break;
            case "x":
                result *= num[j];
                break;
            case "%":
                result /= num[j];
                break;
        }
    }
    var equa = document.getElementsByClassName('calc__display')[0].innerText + ' = ' + result;
    document.getElementsByClassName('history__table')[0].innerHTML += "<tr><td>" + equa + "</td></tr>";
    document.getElementsByClassName('calc__display')[0].innerText = result;
    num = [0];
    oper = "";
    i = 0;
}