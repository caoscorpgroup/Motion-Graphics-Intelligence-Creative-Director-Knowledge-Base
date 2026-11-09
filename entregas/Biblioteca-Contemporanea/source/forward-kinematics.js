// forward-kinematics.js - Sistema FK con herencia de rotaciones
function applyFK(node, angle) {
    if (node) {
        node.style.transform = `rotate(${angle}deg)`;
    }
}
window.applyFK = applyFK;
