// Ninja Motion Graphics Controller Engine
(function() {
  let speedMultiplier = 1.0;
  let isJumping = false;
  let jumpProgress = 0;
  let animFrameId = null;
  let time = 0;
  
  // Elements
  const poleLayer = document.getElementById('layer-poles');
  const mountainLayer = document.getElementById('layer-mountains');
  const ninjaGroup = document.getElementById('layer-ninja');
  const scarfPath = document.getElementById('ninja-scarf');
  const katanaTrail = document.getElementById('katana-trail');
  const sparksContainer = document.getElementById('sparks-container');
  const droneGroup = document.getElementById('layer-drone');
  const droneTop = document.getElementById('drone-top');
  const droneBottom = document.getElementById('drone-bottom');
  const droneSlashLine = document.getElementById('drone-slash-line');

  // Rig Joints
  const thighFront = document.getElementById('bone-thigh-front');
  const shinFront = document.getElementById('bone-shin-front');
  const thighBack = document.getElementById('bone-thigh-back');
  const shinBack = document.getElementById('bone-shin-back');
  const armFront1 = document.getElementById('bone-arm-front-1');
  const armFront2 = document.getElementById('bone-arm-front-2');
  const katanaMain = document.getElementById('katana-main');

  // Spawn Poles
  const poles = [];
  for (let i = 0; i < 5; i++) {
    const pole = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    pole.setAttribute('width', '8');
    pole.setAttribute('height', '300');
    pole.setAttribute('fill', '#090d14');
    pole.setAttribute('x', i * 300);
    pole.setAttribute('y', '150');
    poleLayer.appendChild(pole);
    poles.push(pole);
  }

  // Trail history
  const trailPoints = [];

  function animate() {
    time += 0.05 * speedMultiplier;

    // 1. Parallax Motion
    poles.forEach(pole => {
      let x = parseFloat(pole.getAttribute('x')) - (14 * speedMultiplier);
      if (x < -50) x = 1250;
      pole.setAttribute('x', x);
    });

    let mX = (Math.sin(time * 0.2) * 20);
    mountainLayer.setAttribute('transform', `translate(${mX}, 0)`);

    // 2. Ninja Jump / Cut Sequence Logic
    let ninjaY = 440;
    let ninjaRotation = 0;

    if (isJumping) {
      jumpProgress += 0.02 * speedMultiplier;
      // Parabolic Arc
      ninjaY = 440 - (Math.sin(jumpProgress * Math.PI) * 160);
      ninjaRotation = jumpProgress * 360; // 360 flip

      // Drone Slicing Interaction at peak of jump
      if (jumpProgress >= 0.45 && jumpProgress <= 0.65) {
        droneSlashLine.setAttribute('opacity', '1');
        droneTop.setAttribute('transform', `translate(${ (jumpProgress - 0.5) * 120 }, ${ -(jumpProgress - 0.5) * 80 }) rotate(${ (jumpProgress - 0.5) * 45 })`);
        droneBottom.setAttribute('transform', `translate(${ -(jumpProgress - 0.5) * 60 }, ${ (jumpProgress - 0.5) * 100 }) rotate(${ -(jumpProgress - 0.5) * 30 })`);
      }

      if (jumpProgress >= 1.0) {
        isJumping = false;
        jumpProgress = 0;
        // Reset drone after cut
        setTimeout(() => {
          droneSlashLine.setAttribute('opacity', '0');
          droneTop.setAttribute('transform', 'translate(0,0)');
          droneBottom.setAttribute('transform', 'translate(0,0)');
        }, 1200);
      }
    }

    ninjaGroup.setAttribute('transform', `translate(450, ${ninjaY}) rotate(${ninjaRotation})`);

    // 3. Procedural Run Cycle (FK IK Leg/Arm Trigonometry)
    if (!isJumping) {
      const legPhase1 = Math.sin(time * 3);
      const legPhase2 = Math.sin(time * 3 + Math.PI);

      // Front Leg
      thighFront.setAttribute('x2', 20 + legPhase1 * 15);
      thighFront.setAttribute('y2', -15 + Math.cos(time * 3) * 5);
      shinFront.setAttribute('x1', 20 + legPhase1 * 15);
      shinFront.setAttribute('y1', -15 + Math.cos(time * 3) * 5);
      shinFront.setAttribute('x2', 35 + legPhase1 * 20);

      // Back Leg
      thighBack.setAttribute('x2', -20 + legPhase2 * 15);
      thighBack.setAttribute('y2', -15 + Math.cos(time * 3 + Math.PI) * 5);
      shinBack.setAttribute('x1', -20 + legPhase2 * 15);
      shinBack.setAttribute('y1', -15 + Math.cos(time * 3 + Math.PI) * 5);
      shinBack.setAttribute('x2', -35 + legPhase2 * 20);

      // Scarf Wave Effect
      const scarfWiggle = Math.sin(time * 5) * 12;
      scarfPath.setAttribute('d', `M -10 -85 Q -30 ${-80 + scarfWiggle} -65 ${-95 + scarfWiggle * 0.5} Q -40 -75 -10 -75 Z`);
    }

    // 4. Blade Trail Generation
    const bladeTipX = 450 + (isJumping ? 0 : 95);
    const bladeTipY = ninjaY + (isJumping ? -40 : -80) + Math.sin(time * 4) * 10;
    
    trailPoints.push({ x: bladeTipX, y: bladeTipY });
    if (trailPoints.length > 12) trailPoints.shift();

    if (trailPoints.length > 1) {
      let d = `M ${trailPoints[0].x} ${trailPoints[0].y}`;
      for (let i = 1; i < trailPoints.length; i++) {
        d += ` L ${trailPoints[i].x} ${trailPoints[i].y}`;
      }
      katanaTrail.setAttribute('d', d);
    }

    // 5. Friction Sparks
    if (!isJumping && Math.random() > 0.4) {
      const spark = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      spark.setAttribute('cx', 410 + Math.random() * 80);
      spark.setAttribute('cy', 440);
      spark.setAttribute('r', 1 + Math.random() * 2);
      spark.setAttribute('fill', Math.random() > 0.5 ? '#ff0055' : '#00f0ff');
      sparksContainer.appendChild(spark);

      setTimeout(() => spark.remove(), 250);
    }

    animFrameId = requestAnimationFrame(animate);
  }

  // Event Listeners
  document.getElementById('btn-jump').addEventListener('click', () => {
    if (!isJumping) {
      isJumping = true;
      jumpProgress = 0;
    }
  });

  document.getElementById('speed-control').addEventListener('input', (e) => {
    speedMultiplier = parseFloat(e.target.value);
  });

  document.getElementById('style-select').addEventListener('change', (e) => {
    const style = e.target.value;
    const trail = document.getElementById('katana-trail');
    if (style === 'lightning') trail.setAttribute('stroke', 'url(#blade-glow-lightning)');
    if (style === 'inferno') trail.setAttribute('stroke', '#ff0055');
    if (style === 'shadow') trail.setAttribute('stroke', '#9a00ff');
  });

  document.getElementById('btn-download-svg').addEventListener('click', () => {
    const svgEl = document.getElementById('ninja-svg');
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ninja_motion_scene.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Start animation loop
  animate();
})();
