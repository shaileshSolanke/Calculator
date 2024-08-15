const keys = [
  "C",
  "()",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "+/-",
  "0",
  ".",
  "=",
];
const keyContainer = document.querySelector(".key-container");
const output = document.querySelector(".output");

keys.forEach((key) => {
  if (key === "C") {
    keyContainer.innerHTML += `<button class="input-key" onClick="clearOutput()">${key}</button>`;
  } else if (key === "()" || key === "%" || key === "+/-") {
    keyContainer.innerHTML += `<button class="input-key" type="button" disabled>${key}</button>`;
  } else if (key === "=") {
    keyContainer.innerHTML += `<button class="input-key" onClick="calculateInput()">${key}</button>`;
  } else {
    keyContainer.innerHTML += `<button class="input-key" onClick="addInput('${key}')">${key}</button>`;
  }
});

function clearOutput() {
  output.value = "";
}

function calculateInput() {
  try {
    output.value = eval(output.value);
  } catch {
    output.value = "Error";
  }
}

function addInput(input) {
  output.value += input;
}
