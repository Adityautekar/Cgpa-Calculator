const calculateButton = document.getElementById("calci");
let container = document.getElementById("container");
let CGPA = document.getElementById("Cgpa");
let Percentage = document.getElementById("percentage");
let Result = document.getElementById("result"); 
const semInputs = document.querySelectorAll(".sgpa_ip input");

function calculate(ev) {
    const sgpaValues = Array.from(semInputs, input => Number(input.value));
    let totalsgpa = 0;
    let n = 0;
    let error = false;
    let percentage = 0;
    let cgpa = 0;
    sgpaValues.forEach((value, index) => {
        if(value>0 && value<=10){
            totalsgpa+=value;
            n+=1;
        } else if (value >10){
            error = true;
        }
    })
    if(error===true){
        console.log("Sgpa should be atmost 10.")
    } else {
        cgpa = (totalsgpa/n).toFixed(2);
        percentage = (7.25*cgpa)+11;
        CGPA.textContent ="CGPA : " + cgpa;
        Percentage.textContent = "Percentage : " + percentage;
        let res;
        res= (cgpa>=7.5 ? "Excellent grades!" : "Can do Better!");
        Result.textContent = res;

    }
    
}


calculateButton.addEventListener("click", calculate);
