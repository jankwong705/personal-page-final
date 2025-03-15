const darkMode = "dark-mode";

// Elements needed to change color 
const lightSwtich = document.getElementById("light-switch");
const expList = document.getElementsByTagName("job-exp");
const projList = document.getElementsByTagName("project-card");
const headerList = document.querySelectorAll('header ul li');
const refList = document.querySelectorAll("a");

// Stores previous selection 
if(localStorage.getItem("mode") == "dark") {
    lightSwtich.checked = false;
    document.body.classList.add(darkMode);
    for (let exp of expList) { exp.classList.add(darkMode); }
    for (let item of headerList ) { item.classList.add(darkMode); }
    for (let proj of projList ) { proj.classList.add(darkMode); }
    for (let a of refList) { a.classList.add(darkMode); }
}

lightSwtich.addEventListener("change", () => {
    // Light mode
    if(lightSwtich.checked) {
        document.body.classList.remove(darkMode);
        for (let exp of expList) { exp.classList.remove(darkMode); }
        for (let item of headerList ) { item.classList.remove(darkMode); }
        for (let proj of projList ) { proj.classList.remove(darkMode); }
        for (let a of refList) { a.classList.remove(darkMode); }
        localStorage.setItem("mode", "light");
    }
    // Dark mode
    else {
        document.body.classList.add(darkMode);
        for (let exp of expList) { exp.classList.add(darkMode); }
        for (let item of headerList ) { item.classList.add(darkMode); }
        for (let proj of projList ) { proj.classList.add(darkMode); }
        for (let a of refList) { a.classList.add(darkMode); }
        localStorage.setItem("mode", "dark");
    }
});