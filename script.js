// Tab Switching
function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

document.getElementById('btn-html').addEventListener('click', () => showTab('html-code'));
document.getElementById('btn-css').addEventListener('click', () => showTab('css-code'));
document.getElementById('btn-js').addEventListener('click', () => showTab('js-code'));

// Run Code in New Tab
document.getElementById('btn-run').addEventListener('click', () => {
    const html = document.getElementById("html-code").value;
    const css = document.getElementById("css-code").value;
    const js = document.getElementById("js-code").value;

    const newTab = window.open();
    newTab.document.write(`
        <html>
            <head><style>${css}</style></head>
            <body>${html}<script>${js}<\/script></body>
        </html>
    `);
    newTab.document.close();
});

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
