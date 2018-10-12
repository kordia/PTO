
    function weeksoffinayear(){
        var Year1yPaychecks = 26;

        var inner = document.getElementById ('inner').value;

        var outter = document.getElementById ('outer');

        var hours;
        if(inner <5){
        hours = 5;
        }

        if (inner >= 5){
            hours = 6;
        }
        if ( inner >10){
            hours = 7;
        }
        var PTO = hours * Year1yPaychecks;

        outter.innerHTML = PTO / 40;
    }