const validations = [
  {
    field: "name",
    check: (input) => input.value.length >= 3,
    message: "Debe contener al menos 3 caracteres",
  },
  {
    field: "price",
    check: (input) => input.value.length >= 1,
    message: "Debe contener al menos 1 caracter",
  },
  {
    field: "brand",
    check: (input) => input.value.length >= 3,
    message: "Debe contener al menos 3 caracteres",
  },
  {
    field: "category",
    check: (input) => input.value.length >= 3,
    message: "Debe contener al menos 3 caracteres",
  },
  {
    field: "description",
    check: (input) => input.value.length >= 10,
    message: "Debe contener al menos 10 caracteres",
  },
  {
    field: "image",
    check: (input) => input.value.length >= 10,
    message: "Debe contener al menos 10 caracteres",
  },
];

validations.forEach((validation) => {
  const inputId = validation.field;
  const input = document.getElementById(inputId);
  const inputErrorMsg = document.getElementById(inputId + "Error");

  console.log("input", input);

  function validate() {
    inputValidation(validation, input, inputErrorMsg);
  }

  input.addEventListener("blur", validate);
  input.addEventListener("input", validate);
});

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const validationsResult = [];

  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
    const result = inputValidation(validation, input, inputErrorMsg);
    validationsResult.push(result);
  });

  if (validationsResult.every((val) => val == true)) {
    form.submit();
  }
});

function inputValidation(validation, input, inputErrorMsg) {
  if (!input.value) {
    inputErrorMsg.innerText = "El campo no debe estar vacío";
    inputErrorMsg.classList.add("display");
    return false;
  }

  if (!validation.check(input)) {
    inputErrorMsg.innerText = validation.message;
    inputErrorMsg.classList.add("display");
    return false;
  }

  inputErrorMsg.innerText = "";
  inputErrorMsg.classList.remove("display");
  return true;
}
