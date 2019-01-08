function netIncome(){

    var output = document.getElementById ("output"());

    var monthlyIncome = parseInt(document.getElementById("monthlyIncome"()).value);

    var mortgage = parseInt(document.getElementById("mortgage"()).value);

    var rent = parseInt(document.getElementById("rent"()).value);

    var homeInsurance = parseInt(document.getElementById("homeInsurance"()).value);

    var repairMaintence = parseInt(document.getElementById("repairMaintence"()).value);

    var  waterGasElectricity = parseInt(document.getElementById("waterGasElectricity"()).value);

    var  cabileTvInternet = parseInt(document.getElementById("cabileTvInternet"()).value);

    var carPayment = parseInt(document.getElementById("carPayment"()).value);

    var carInsurance = parseInt(document.getElementById("carInsurance"()).value);

    var gasFuel = parseInt(document.getElementById("gasFuel"()).value);

    var carRepairs = parseInt(document.getElementById("carRepairs"()).value);

    var groceriesHousehold = parseInt(document.getElementById("groceriesHousehold"()).value);

    var clothing = parseInt(document.getElementById("clothing"()).value);

    var entertainment = parseInt(document.getElementById("entertainment"()).value);

    var medical = parseInt(document.getElementById("medical"()).value);

    var petSupplies = parseInt(document.getElementById("petSupplies"()).value);


    var netIncome = monthlyIncome - ( mortgage + rent + homeInsurance +  repairMaintence + waterGasElectricity + cabileTvInternet + carPayment +  carInsurance +
        gasFuel + carRepairs + groceriesHousehold + groceriesHousehold + clothing + entertainment + medical +  petSupplies)
    
    output.innerHTML =  "$" - netIncome;

}

