const inputField = document.getElementById("inputFiled") as HTMLInputElement;

const submit = document.getElementById("Btn") as HTMLButtonElement;

submit.addEventListener("click", () => {
  console.log(inputField.value);

  const value = inputField.value;

  if (value === "") {
    alert("please enter your name");
  } else {
    console.log(value);
  }
});
