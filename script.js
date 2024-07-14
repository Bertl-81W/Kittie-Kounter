const toggleButton = document.getElementById("theme-toggle");

function updateButtonText() {
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Light Mode";
  }else{
    toggleButton.textContent = "Dark Mode";
  }
}
updateButtonText();

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateButtonText();
});

let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let reset = document.querySelector("#reset");


console.log(add, subtract);

let output = document.querySelector("#output");
let messageContainer = document.querySelector("#messageContainer");
let count = 0;

add.addEventListener("click", function() {
  count++;
  if (count >= 5 && count <= 10) {
    updateMessage("MEEEEOOOOOOW");
  }
  if (count > 10) {
    count = 0;
    updateMessage("YOU ARE LOVED");
  }
  output.innerText = count;
});

function updateMessage(message) {
  messageContainer.textContent = message;

  setTimeout(function() {
    messageContainer.textContent = ""
  }, 2000);
  
}

subtract.addEventListener("click", function() {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1; 
  
  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});

reset.addEventListener("click", function reset() {
let output = document.querySelector("#output");
let result = 0;
output.innerText = result;

});


