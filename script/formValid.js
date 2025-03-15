// Array of objects
// {time, location, value, error}
var form_errors = [];

const formElement = document.getElementById("send-msg");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const numField = document.getElementById("number");
const msgField = document.getElementById("message");

nameField.addEventListener("input", () => {
    const errorMsg = document.getElementById("name-pattern-mismatch");
    if (nameField.validity.patternMismatch) {
        // Masking
        let errorValue = nameField.value;
        nameField.value = nameField.value.replace(/[^a-zA-Z0-9 ]/g, "");

        // Flash
        setTimeout(() => {
            nameField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
        }, 100);
        setTimeout(() => {
            nameField.style.backgroundColor = "white" ? "rgb(243, 199, 199)" : "rgb(243, 199, 199)";
        }, 100);
        nameField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
        
        // Display error msg
        errorMsg.value = "(Special characters disallowed.)";
        errorMsg.style.opacity = "1";

        // Fade
        setTimeout(() => {
            errorMsg.style.transition = "opacity 1s ease-out";
            errorMsg.style.opacity = "0";
        }, 2000);

        // Store errors
        form_errors.push({
            time: Date.now(),
            location: "name",
            value: errorValue,
            error: "Special characters as input"
        });
    }
    else {
        nameField.style.backgroundColor = "white";
    }
});

numField.addEventListener("input", () => {
    const errorMsg = document.getElementById("num-pattern-mismatch");
    if (numField.validity.patternMismatch) {
        // Masking
        let errorValue = numField.value;
        numField.value = numField.value.replace(/[^0-9]/g, "");

        // Flash
        setTimeout(() => {
            numField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
        }, 100);
        setTimeout(() => {
            numField.style.backgroundColor = "white" ? "rgb(243, 199, 199)" : "rgb(243, 199, 199)";
        }, 100);
        numField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";

        // Display error msg
        errorMsg.value = "(Only numbers allowed.)";
        errorMsg.style.opacity = "1";

        // Fade
        setTimeout(() => {
            errorMsg.style.transition = "opacity 1s ease-out";
            errorMsg.style.opacity = "0";
        }, 2000);

        // Store errors
        form_errors.push({
            time: Date.now(),
            location: "number",
            value: errorValue,
            error: "Non-numerical values as input"
        });
    }
    else {
        numField.style.backgroundColor = "white";
    }
});

// Check input against special characters 
emailField.addEventListener("input", () => {
    const errorMsg = document.getElementById("email-pattern-mismatch");
    let allowedValues = /^[a-zA-Z0-9._%+-@]*$/;

    if (!allowedValues.test(emailField.value)) {
        // Masking
        let errorValue = emailField.value;
        emailField.value = emailField.value.replace(/[^a-zA-Z0-9._%+-@]/g, ""); // Remove invalid characters

        // Flash
        setTimeout(() => {
            emailField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
        }, 100);
        setTimeout(() => {
            emailField.style.backgroundColor = "white" ? "rgb(243, 199, 199)" : "rgb(243, 199, 199)";
        }, 100);
        emailField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";

        // Display error msg
        errorMsg.value = "(Special characters disallowed.)";
        errorMsg.style.opacity = "1";

        // Fade
        setTimeout(() => {
            errorMsg.style.transition = "opacity 1s ease-out";
            errorMsg.style.opacity = "0";
        }, 2000);

        // Store errors
        form_errors.push({
            time: Date.now(),
            location: "email",
            value: errorValue,
            error: "Special characters as input"
        });
    }
    else {
        emailField.style.backgroundColor = "white";
    }
});

// Check for validity of email
emailField.addEventListener("blur", () => {
    const errorMsg = document.getElementById("email-pattern-mismatch");
    if (emailField.validity.patternMismatch) {
        // Flash
        setTimeout(() => {
            emailField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
        }, 100);
        setTimeout(() => {
            emailField.style.backgroundColor = "white" ? "rgb(243, 199, 199)" : "rgb(243, 199, 199)";
        }, 100);
        emailField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";

        // Display error msg
        errorMsg.value = "(Not a valid email.)";
        errorMsg.style.opacity = "1";

        // Fade
        setTimeout(() => {
            errorMsg.style.transition = "opacity 1s ease-out";
            errorMsg.style.opacity = "0";
        }, 2000);
        
        // Store errors
        form_errors.push({
            time: Date.now(),
            location: "email",
            value: emailField.value,
            error: "Invalid email as input"
        });
    }
    else {
        emailField.style.backgroundColor = "white";
    }
});

msgField.addEventListener("input", () => {
    const errorMsg = document.getElementById("message-error");
    const allowedPattern = /^[a-zA-Z0-9 .,!?'\n]*$/;
    if (!allowedPattern.test(msgField.value)) {
        // Masking
        let errorValue = msgField.value;
        msgField.value = msgField.value.replace(/[^a-zA-Z0-9 .,!?'\n]/g, "");

        // Flash
        setTimeout(() => {
            msgField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
        }, 100);
        setTimeout(() => {
            msgField.style.backgroundColor = "white" ? "rgb(243, 199, 199)" : "rgb(243, 199, 199)";
        }, 100);
        msgField.style.backgroundColor = "rgb(243, 199, 199)" ? "white" : "white";
        
        // Display error msg
        errorMsg.value = "(Special characters disallowed.)";
        errorMsg.style.opacity = "1";
        // Fade
        setTimeout(() => {
            errorMsg.style.transition = "opacity 1s ease-out";
            errorMsg.style.opacity = "0";
        }, 2000);
        
        // Store errors
        form_errors.push({
            time: Date.now(),
            location: "message",
            value: errorValue,
            error: "Special characters as input"
        });
    }
    else {
        msgField.style.backgroundColor = "white";
    }

    // Count char 
    const charCount = document.getElementById("char-count");
    const totalAllowed = document.getElementById("total-char");
    const charFull = document.getElementById("full-char");
    charCount.value = msgField.value.length;
    if (parseInt(charCount.value) >= 2500) {
        charCount.style.cssText = "color: red; font-weight: bold;";
        totalAllowed.style.cssText = "color: red; font-weight: bold;";
    }
    else {
        charCount.style.cssText = "color: black; font-weight: regular;";
        totalAllowed.style.cssText = "color: black; font-weight: regular;";
    }
    if (parseInt(charCount.value) == 3000) {
        charFull.value = "Character limit reached";

        // Store errors
        form_errors.push({
            time: Date.now(),
            location: "message",
            value: "<Long message>",
            error: "Character limit reached"
        });
    } else { charFull.value = ""; }
});

formElement.addEventListener("submit", () => {
    // Submit errors
    document.getElementById("form-errors").value = JSON.stringify(form_errors);
});