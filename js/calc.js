
function deductedPTO(){
    
    var output = document.getElementById('output');

    var payCheckPerYear = 26;

    var hrsPerPayCheck =5;

    var totalHoursPerYear = hrsPerPayCheck * payCheckPerYear;

   output.innerHTML = totalHoursPerYear;

}