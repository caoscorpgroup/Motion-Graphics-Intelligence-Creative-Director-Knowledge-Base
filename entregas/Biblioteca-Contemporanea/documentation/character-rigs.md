# Especificación de rigs

**Estado:** requisitos propuestos; no implementados ni validados en esta entrega.

El objetivo experimental era explorar jerarquías de articulaciones y controles FK/IK para personajes 2D. Sin embargo, el prototipo actual no contiene cadenas cinemáticas completas ni un sistema de pivotes normalizados conectado a los personajes.

- `CharacterRig` almacena una referencia al elemento raíz y un objeto de huesos, pero no construye una jerarquía funcional.
- `applyFK` aplica una rotación a un nodo aislado; no propaga transformaciones por una cadena articulada.
- `solveIK2Joints` calcula dos ángulos para longitudes y coordenadas dadas, pero no está integrado con el escenario.
- No se ha validado deformación, oclusión de articulaciones, límites articulares ni comportamiento con recursos de personaje reales.

Estos puntos deben tratarse como objetivos para una futura prueba, no como capacidades disponibles.
