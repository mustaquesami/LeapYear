// Odd and Even Number Checker

function checkNumber(){
    let numInput = document.getElementById("num");
    let num = parseInt(numInput.value);
    let numResult = document.getElementById("numResult");
    (num % 2 ===0)? numResult.innerHTML = (`${num} is even number`):numResult.innerHTML= (`${num} is odd number`)
}
// Reset function
myResetNum = ()=>{
    document.getElementById("num").value="";
    document.getElementById("numResult").innerHTML="";
}


// Leap Year Checker

function isLeapYear(){
    let yearInput = document.getElementById("year");
    let year = parseInt(yearInput.value);
    let yearResult = document.getElementById("yearResult");

    if(year>1582){
        if(year%4===0){
            if(year%100===0){
                if(year%400){
                    yearResult.innerHTML = `${year} is leap year`;
                }else{
                    yearResult.innerHTML = `${year} is not leap year`;
                }
            }else{
                yearResult.innerHTML = `${year} is leap year`;
            }
        }else{
            yearResult.innerHTML = `${year} is not leap year`;
        }
    }else{
        yearResult.innerHTML = `<span class="error">Year must be greater than 1582 - the first year of Gregorian calendar.</span>`;
    }
    
}   

// Reset function
myReset = ()=>{
    document.getElementById("year").value="";
    document.getElementById("yearResult").innerHTML="";
}

// Multiplication Tables
const multiTable = () => {
    let multiplierInput = document.getElementById("multiplier");
    let multiplier = parseInt(multiplierInput.value);

    let multiplicatorInput = document.getElementById("multiplicator");
    let multiplicator = parseInt(multiplicatorInput.value);

    let multiTableResult = document.getElementById("multiTableResult");
    multiTableResult.innerHTML = ""; // Clear previous results

    for (let i = 1; i <= multiplicator; i++) {
        // Create a new paragraph element for each result
        let paragraph = document.createElement("p");
        paragraph.textContent = `${multiplier} x ${i} = ${multiplier * i}`;
        
        // Append the paragraph to the result container
        multiTableResult.appendChild(paragraph);
    }
}

// Reset function
myResetMulti = () => {
    document.getElementById("multiplier").value = "";
    document.getElementById("multiplicator").value = "";
    document.getElementById("multiTableResult").innerHTML = "";
}

// Grading system using switch statement

const displayGrade = () => {
    const markInput = document.getElementById("mark");
    const mark = parseInt(markInput.value);
    let grade;

    switch (true) {
        case (mark >= 80 && mark <= 100):
            grade = "A+";
            break;
        case (mark >= 75 && mark <= 79):
            grade = "A";
            break;
        case (mark >= 70 && mark <= 74):
            grade = "A-";
            break;
        case (mark >= 65 && mark <= 69):
            grade = "B+";
            break;
        case (mark >= 60 && mark <= 64):
            grade = "B";
            break;
        case (mark >= 55 && mark <= 59):
            grade = "B-";
            break;
        case (mark >= 50 && mark <= 54):
            grade = "C+";
            break;
        case (mark >= 45 && mark <= 49):
            grade = "C";
            break;
        case (mark >= 40 && mark <= 44):
            grade = "D";
            break;
        case (mark >= 0 && mark < 40):
            grade = "F";
            break;
        default:
            grade = "Unknown";
            break;
    }

    const gradeResult = document.getElementById("gradeResult");
    gradeResult.innerHTML = `Grade: ${grade}`;
}
const gradeReset = () => {
    document.getElementById("mark").value = "";
    document.getElementById("gradeResult").innerHTML = "";
}

const person = [
    {
        name:"sami",
        age:13,
        email:"sami@gmail.com",
        phone:"01713442070"
    },
    {
        name:"karim",
        age:3,
        email:"karim@gmail.com",
        phone:"01913442070"
    }
];
person.filter((value)=>{
    if(value.age>18){
        console.log(value);
    }else{
        console.log(`${value.age} is below 18`);
    }
});