// character-rig.js - Definición de jerarquías de articulaciones y pivotes
class CharacterRig {
    constructor(id, rootElement) {
        this.id = id;
        this.root = rootElement;
        this.bones = {};
    }
}
window.CharacterRig = CharacterRig;
