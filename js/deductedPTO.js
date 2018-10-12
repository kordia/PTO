function deductedPTO(){

    // event.preventDefault();
    
    var output = document.getElementById ("output");

    var yearsWorked = document.getElementById ("yearsWorked").value;

    var hoursUsed = document.getElementById ("hoursUsed").value;

    var totalHours = 40; 
    
    var totalDays = 8;
    
    var checkPerYear = 26;

    if (yearsWorked < 5) {
        var ptoPerCheck = 5;

    } else if (yearsWorked < 10){
        var ptoPerCheck = 6;
    } else {
        var ptoPerCheck = 7;
    }
    
    var ptoLeft = (checkPerYear * ptoPerCheck) - hoursUsed;

    output.innerHTML = "You have " + ptoLeft + "hoursleft <br> You have "+ ptoLeft / totalDays  / totalHours + "hoursleft";

} 

