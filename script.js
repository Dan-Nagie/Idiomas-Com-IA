const input = document.getElementById("textInput");
const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const value = input.value.trim();

  if (value.length === 0) {
    result.textContent = "Por favor, digite algo antes de enviar.";
    result.style.color = "#ffdddd";
    return;
  }

  result.style.color = "#ffffff";
  result.textContent = `Você escreveu: ${value}`;
  input.value = "";
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});