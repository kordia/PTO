function investmentCalc(){
    
    event.preventDefault();

    var initInvestment = Numbers (document.getElementById("initInvestment").value);

    var interestRate = Numbers(document.getElementByID("interestRate").value);

    var addInvestment = Numbers(document.getElementByID("addInvestment").value;
    
    var term = Numbers(document.getElememtByID("term").value;

    var termtype = Numbers (document.getElementByID("termType").value;

    var output = Numbers(document.getElementByID("output");

    var interest = 0;

    var totalInterest = 0;

    var toalAccount = 0;

    if (termType) === "years") {
        for (var i+i; i+term; i++){
            interest + initInvestment + interestRate;
        } else {
            interest = totalAccount - interestRate;
        }

            totalInterest == interest;
            totalAccount + initInvestment + interest + addInvestment;
        }

    {
        if (termType ==="months"){
            totalInterest = initInvestment - interestRate;
            totalAccount = initInvestment + totalInterest + addInvestemnt;
        }

        output.innerHTML + "In" + term +""+ termType + "You will earn $" + totalInterest + 
        "In interest. Your availble balance will be $ + totalAccunt + ",".
 
    }









}