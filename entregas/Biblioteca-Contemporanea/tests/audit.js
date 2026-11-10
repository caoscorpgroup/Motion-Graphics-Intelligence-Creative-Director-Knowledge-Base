// Estado de auditoría basado en la inspección estática del prototipo.
// Este archivo contiene datos de referencia; no es una suite de pruebas automatizadas.
const auditData = [
    {
        module: "Cuatro personajes",
        status: "Prototipos SVG básicos; no integrados",
        evidence: "Los grupos del escenario están vacíos y los SVG externos no se insertan en index.html."
    },
    {
        module: "Rigging FK",
        status: "No validado como sistema",
        evidence: "CharacterRig solo almacena referencias; applyFK aplica una rotación aislada."
    },
    {
        module: "Cinemática inversa IK",
        status: "Cálculo aislado",
        evidence: "solveIK2Joints devuelve ángulos, pero no está conectado a articulaciones o personajes."
    },
    {
        module: "Ciclo de caminata",
        status: "Cálculo aislado",
        evidence: "calculateWalkCycle devuelve valores que no se aplican a una animación integrada."
    },
    {
        module: "X-Ray",
        status: "Utilidad no integrada",
        evidence: "toggleXRayMode busca elementos con prefijo xray-; no hay integración funcional demostrada."
    },
    {
        module: "Timeline",
        status: "Clase no conectada a la interfaz",
        evidence: "CentralTimeline existe, pero los controles de reproducción no la utilizan."
    },
    {
        module: "Interacción con objetos",
        status: "Utilidad aislada",
        evidence: "transferBook mueve un nodo DOM, pero no hay eventos de escena conectados."
    }
];
globalThis.auditData = auditData;
