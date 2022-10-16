function compute()
{
    p = document.getElementById("principal").value;
    
}
var rate = document.getElementById("principal").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
function updateRate() {
    var rateval = doc.getElementById("rate").value;
    document.getElementById('rate_val').innerText=rateval;
}
            
