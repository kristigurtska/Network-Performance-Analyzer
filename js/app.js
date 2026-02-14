document.getElementById  ("analyze-button").addEventListener("click", analyzePerformance);

function analyzePerformance() {

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.textContent = "Analyzing network performance...";

    const startTime = performance.now();

    // Simulated network request
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then(() => {
            const endTime = performance.now();
            const elapsedTime = endTime - startTime;

            displayResult(elapsedTime);
        })
        .catch((error) => {
            console.error("Error:", error);
            displayResult(null);
        });
}

function displayResult(time) {
    const resultContainer = document.getElementById("resultContainer");

    if (time === null) {
        resultContainer.textContent = "Network request failed.";
        return;
    }

    resultContainer.textContent =
        `Network request completed in ${time.toFixed(2)} ms`;
}