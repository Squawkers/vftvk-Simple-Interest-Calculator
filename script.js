function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    if(principal <= 0){
        alert("Please enter the positive number");
        document.getElementById("principal").focus();
        return false
    }

    return alert("Interrest rate is: " + interest + " units of your currency. You receive it in the year: " + year);
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
    
    /*output.innerHTML = rateval.value
    rateval.oninput = function(){
        output.innerHTML = this.value;
    }*/

}