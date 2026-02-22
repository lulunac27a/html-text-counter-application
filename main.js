const textBoxText = document.getElementById("text-box"); //text box input
const calculateButton = document.getElementById("calculate"); //calculate button
const outputText = document.getElementById("output"); //output text area
calculateButton.addEventListener("click", () => {
    //when calculate button is pressed
    const textContent = textBoxText.value; //get text box input value
    const characters = textContent.length; //calculate number of characters
    const words =
        textContent.trim() === "" ? 0 : textContent.trim().split(/\s+/).length; //calculate number of words
    const lines = textContent.split("\n").length; //calculate number of lines
    outputText.innerText = `Characters: ${Intl.NumberFormat("en-US").format(characters)}\nWords: ${Intl.NumberFormat("en-US").format(words)}\nLines: ${Intl.NumberFormat("en-US").format(lines)}`; //update output text area
});
