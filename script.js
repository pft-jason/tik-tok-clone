document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#submitButton"); // Replace with your button's ID
    const fields = document.querySelectorAll(".required-field"); // Replace with your input fields' class

    function checkFields() {
        const allFilled = Array.from(fields).every(field => field.value.trim() !== "");
        if (allFilled) {
            button.classList.add("button-active");
        } else {
            button.classList.remove("button-active");
        }
    }

    fields.forEach(field => {
        field.addEventListener("input", checkFields);
    });
});
