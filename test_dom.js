const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('C:\\Users\\mohameden\\.gemini\\antigravity\\brain\\dde9a0b5-e442-4c37-b832-072f1910c841\\.system_generated\\steps\\41\\content.md', 'utf8');

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable"
});

dom.window.addEventListener('error', (event) => {
  console.error("DOM Error:", event.error);
});

// simulate DOMContentLoaded
dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));

setTimeout(() => {
    console.log("Dark Mode:", dom.window.isDark);
    console.log("HTML classes:", dom.window.document.documentElement.className);
    console.log("Lang:", dom.window.lang);
    console.log("HTML lang:", dom.window.document.documentElement.lang);
    
    // Simulate clicks
    console.log("Simulating theme toggle...");
    dom.window.document.getElementById('themeToggle').click();
    console.log("Dark Mode after toggle:", dom.window.isDark);
    console.log("HTML classes after toggle:", dom.window.document.documentElement.className);
    
    console.log("Simulating lang toggle...");
    dom.window.document.getElementById('langToggle').click();
    console.log("Lang after toggle:", dom.window.lang);
    console.log("HTML lang after toggle:", dom.window.document.documentElement.lang);
    console.log("Hero Title:", dom.window.document.querySelector('.hero-title').textContent);
    
    console.log("Simulating Digital Assets click...");
    const assetsLink = Array.from(dom.window.document.querySelectorAll('.nav-links a')).find(a => a.getAttribute('href') === '#assets');
    assetsLink.click();
    
    const pagesList = ['#home', '#digitalAssetsPage', '#creatorPage', '#contactPage', '#podAssetsPage', '#tiktokGuidesPage'];
    for(let id of pagesList) {
        const el = dom.window.document.querySelector(id);
        console.log(`Display of ${id}:`, el ? el.style.display : 'Not Found');
    }
}, 2000);
