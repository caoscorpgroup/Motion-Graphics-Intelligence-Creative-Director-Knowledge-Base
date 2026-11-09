// character-expressions.js - Expresiones faciales y parpadeo
function updateExpressions(t) {
    // Parpadeo cíclico
    const isBlinking = (t % 4.0) < 0.15;
    return isBlinking;
}
window.updateExpressions = updateExpressions;
