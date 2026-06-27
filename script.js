// Loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Code Live Run
const editors = document.querySelectorAll("textarea");
editors.forEach(editor => {
    editor.addEventListener("input", runCode);
});

function runCode() {
    const html = document.getElementById("html-code").value;
    const css = `<style>${document.getElementById("css-code").value}</style>`;
    const js = `<script>${document.getElementById("js-code").value}<\/script>`;
    
    const preview = document.getElementById("preview").contentWindow.document;
    preview.open();
    preview.write(html + css + js);
    preview.close();
}
