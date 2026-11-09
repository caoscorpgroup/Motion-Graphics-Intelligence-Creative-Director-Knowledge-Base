// xray-debug.js - Modo X-Ray para visualización del rig en tiempo real
function toggleXRayMode(active) {
    const xrayElements = document.querySelectorAll('[id^="xray-"]');
    xrayElements.forEach(el => {
        el.style.opacity = active ? "1" : "0";
    });
}
window.toggleXRayMode = toggleXRayMode;
