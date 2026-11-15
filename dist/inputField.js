const inputField = document.getElementById("inputFiled");
const submit = document.getElementById("Btn");
submit.addEventListener("click", () => {
    console.log(inputField.value);
    const value = inputField.value;
    if (value === "") {
        alert("please enter your name");
    }
    else {
        console.log(value);
    }
});
export {};
