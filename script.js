// ট্যাব পরিবর্তন করার ফাংশন
function openTab(tabId) {
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(c => c.style.display = "none");
    document.getElementById(tabId).style.display = "block";
}

// নতুন ট্যাবে রান করার ফাংশন
function runInNewTab() {
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
}

// ডার্ক/লাইট মোড টগল
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
