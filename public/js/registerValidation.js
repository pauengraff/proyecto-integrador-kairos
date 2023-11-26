const validations = [
    {
      field: "first_name",
      check: (input) => input.value.length >= 2,
      message: "Debe contener al menos 2 caracteres",
    },
    {
      field: "last_name",
      check: (input) => input.value.length >= 2,
      message: "Debe contener al menos 2 caracteres",
    },
    {
      field: "email",
      check: (input) => input.value.length >= 2,
      message: "Completa tu email",
    },
    {
      field: "birth_date",
      check: (input) => input.value.length >= 2,
      message: "Completa la fecha",
    },
    {
      field: "password",
      check: (input) => input.value.length >= 2,
      message: "Completa la contraseña",
    },  
    {
      field: "avatar",
      check: (input) => input.files && input.files.length > 0,
      message: "Falta cargar la foto de perfil",
    },
  ];

  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
  
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
      inputErrorMsg.innerText = "Completa los datos";
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
  
    