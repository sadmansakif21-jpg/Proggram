// Tab Switching logic
function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    const target = document.getElementById(id);
    if (target) target.style.display = 'block';
}

document.getElementById('btn-html').addEventListener('click', () => showTab('html-code'));
document.getElementById('btn-css').addEventListener('click', () => showTab('css-code'));
document.getElementById('btn-js').addEventListener('click', () => showTab('js-code'));

// Run Code logic
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
