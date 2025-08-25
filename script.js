const imgBtn = document.getElementById('img-btn');

imgBtn.addEventListener('click', () => {
    let d = parseInt(document.querySelector('input[placeholder="DD"]').value);
    let m = parseInt(document.querySelector('input[placeholder="MM"]').value) - 1; // months are 0-based
    let y = parseInt(document.querySelector('input[placeholder="YYYY"]').value);


    let today = new Date();
    let birthDate = new Date(y, m, d);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();


    const notAValidDate = document.querySelector('.days-error');
    const notAValidMonth = document.querySelector('.month-error');
    const notAValidYear = document.querySelector('.year-error');
    const errorInputs = document.querySelectorAll('.error-input')
    const labels = document.querySelectorAll(".date-label");


    // Reset all before validation
        labels.forEach(label=> label.classList.remove('text-red-500'));
        errorInputs.forEach(errorInput => errorInput.classList.remove('border-red-500'))
   
    // Check if valid date
  
    // check empty first
if (!d) {
    notAValidDate.innerText = "Day is required";
    errorInputs[0].classList.add("border-red-500");
    labels[0].classList.add("text-red-500");
    return;
}
if (!m) {
    notAValidMonth.innerText = "Month is required";
    errorInputs[1].classList.add("border-red-500");
    labels[1].classList.add("text-red-500");
    return;
}
if (!y) {
    notAValidYear.innerText = "Year is required";
    errorInputs[2].classList.add("border-red-500");
    labels[2].classList.add("text-red-500");
    return;
}

// now safely parse

// let birthDate = new Date(y, m, d);

// validate real calendar date
if (birthDate.getDate() !== d || isNaN(birthDate.getTime())) {
    notAValidDate.innerText = "Must be a valid date";
    errorInputs[0].classList.add("border-red-500");
    labels[0].classList.add("text-red-500");
    return;
}

if (birthDate.getMonth() !== m) {
    notAValidMonth.innerText = "Must be a valid month";
    errorInputs[1].classList.add("border-red-500");
    labels[1].classList.add("text-red-500");
    return;
}

    if(
        birthDate.getFullYear() !== y){
             notAValidYear.innerText = `Must be a valid Year`;
            errorInputs[2].classList.add("border-red-500");
            labels[2].classList.add('text-red-500');
        return; 
        }
        // Future date invalid
    if (birthDate > today) {
        notAValidYear.innerText = "Date cannot be in the future";
        errorInputs[2].classList.add("border-red-500");
        labels[2].classList.add("text-red-500");
        return;
    }

  
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    document.querySelector('.year-result').innerText = years;
    document.querySelectorAll('.year-result')[1].innerText = months;
    document.querySelectorAll('.year-result')[2].innerText = days;
});
