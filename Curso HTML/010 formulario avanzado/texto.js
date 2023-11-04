document.addEventListener("DOMContentLoaded", function () {
    const textForm = document.getElementById("text-form");
    const textOutput = document.getElementById("output");

    textForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const color = textForm["text-color"].value;
        const fontFamily = textForm["font-family"].value;
        const fontSize = textForm["font-size"].value + "px";
        const style = [...textForm.querySelectorAll('input[name="style"]:checked')].map(input => input.value).join(" ");
        const textTransform = textForm.querySelector('input[name="text-transform"]:checked').value;

        textOutput.style.color = color;
        textOutput.style.fontFamily = fontFamily;
        textOutput.style.fontSize = fontSize;
        textOutput.style.fontWeight = style.includes("bold") ? "bold" : "normal";
        textOutput.style.textDecoration = style.includes("underline") ? "underline" : "none";
        textOutput.style.fontStyle = style.includes("italic") ? "italic" : "normal";
        textOutput.style.textTransform = textTransform;

        /* console.log(color,fontFamily,fontSize,textOutput.style.fontWeight,textOutput.style.textDecoration,
            textOutput.style.fontStyle,textOutput.style.textTransform) */

        console.log(textOutput.value)
    });
});
