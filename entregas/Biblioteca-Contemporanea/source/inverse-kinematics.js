// inverse-kinematics.js - Cinemática Inversa (IK) con ley de cosenos
function solveIK2Joints(x, y, L1, L2) {
    const distSq = x * x + y * y;
    const dist = Math.sqrt(distSq);
    const maxReach = L1 + L2;
    const minReach = Math.abs(L1 - L2);
    let clampedDist = Math.min(Math.max(dist, minReach), maxReach);
    
    const cosAngle2 = (clampedDist * clampedDist - L1 * L1 - L2 * L2) / (2 * L1 * L2);
    const angle2 = Math.acos(Math.max(-1, Math.min(1, cosAngle2)));
    const angle1 = Math.atan2(y, x) - Math.atan2(L2 * Math.sin(angle2), L1 + L2 * Math.cos(angle2));
    
    return {
        theta1: angle1 * (180 / Math.PI),
        theta2: angle2 * (180 / Math.PI)
    };
}
window.solveIK2Joints = solveIK2Joints;
