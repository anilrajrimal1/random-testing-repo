function readMind() {
    let number = document.getElementById("user-number").value;

    if (number < 1 || number > 10) {
        alert("Please enter a number between 1 and 10");
        return;
    }
    document.getElementById("form").style.display = "none";
    document.getElementById("loading").style.display = "block";

    let messages = [
        "Analyzing brainwaves...",
        "Scanning memories...",
        "Interpreting data...",
        "Connecting with the cosmos...",
        "Decoding psychic signals..."
    ];

    let index = 0;

    let loadingInterval = setInterval(() => {
        if (index < messages.length) {
            document.getElementById("loading-message").textContent = messages[index];
            index++;
        } else {
            clearInterval(loadingInterval);

            document.getElementById("loading").style.display = "none";
            document.getElementById("result").style.display = "block";
            document.getElementById("revealed-number").textContent = number;
        }
    }, 2000);
}

function resetApp() {
    document.getElementById("user-number").value = "";
    document.getElementById("form").style.display = "block";
    document.getElementById("result").style.display = "none";
}
