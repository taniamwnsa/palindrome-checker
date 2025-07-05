const userInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = (input) => {

    if (input === "") {
        alert("Please input a value.");
        return;
    };

    const originalInput = input;
    let storeInput;
    let workingInput = input;
    
    workingInput = workingInput.replace(/[^A-Za-z0-9]/g, '');
    workingInput = workingInput.toLowerCase();
    storeInput = workingInput;

    console.log(storeInput);

    workingInput = workingInput.split("").reverse().join("");

    console.log(workingInput);

    if (workingInput === storeInput) {
        result.innerText = `${originalInput} is a palindrome.`
    } else {
        result.innerText = `${originalInput} is not a palindrome.`
    }

};

checkBtn.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = "";
});