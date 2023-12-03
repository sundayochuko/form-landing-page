function submitText() {
  // Get the input value
  const userInput = document.getElementById("textValue").value;

  // Display the input value
  const outputTextElement = document.getElementById("outputText");

  outputTextElement.textContent = "You Summited Your Name " + userInput;

  document.getElementById("textValue").value = "";
}
