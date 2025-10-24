// Get display element
const display = document.getElementById("display");

// Append value to display
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        // Ignore if no value (like C or =)
        if (!value) return;

        display.value += value;
    });
});

// Handle equals button
document.getElementById("equals").addEventListener("click", () => {
    try {
        if (display.value.trim() === "") return;

        // Prevent unsafe eval by allowing only numbers and operators
        if (!/^[0-9+\-*/. ]+$/.test(display.value)) {
            alert("Invalid input!");
            return;
        }

        const result = eval(display.value);

        if (!isFinite(result)) {
            alert("Math error (e.g., division by zero)");
            return;
        }

        display.value = result;
    } catch (error) {
        alert("Invalid calculation!");
    }
});

// Handle clear button
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});
