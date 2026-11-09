// walk-cycle.js - Ciclos de caminata anatómicos sin deslizamiento
function calculateWalkCycle(t, frequency = 12, stride = 25) {
    const legAngle = Math.sin(t * frequency) * stride;
    const bounce = Math.abs(Math.sin(t * frequency)) * -4;
    return { legAngle, bounce };
}
window.calculateWalkCycle = calculateWalkCycle;
