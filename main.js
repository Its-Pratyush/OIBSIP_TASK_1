document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("input");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.textContent;

      if (buttonText === "=") {
        try {
          input.value = eval(input.value);
        } catch (error) {
          input.value = "Error";
        }
      } else if (buttonText === "c" || buttonText === "C") {
        input.value = ""; 
      } else {
        input.value += buttonText;
      }
    });
  });
});
