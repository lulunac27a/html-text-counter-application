const textBoxText = document.getElementById("text-box");
const calculateButton = document.getElementById("calculate");
const outputText = document.getElementById("output");
calculateButton.addEventListener("click", () => {
    const textContent = textBoxText.value;
    const characters = textContent.length;
    const words =
        textContent.trim() === "" ? 0 : textContent.trim().split(/\s+/).length;
    const lines = textContent.split("\n").length;
    outputText.innerText = `Characters: ${characters}\nWords: ${words}\nLines: ${lines}`;
});
