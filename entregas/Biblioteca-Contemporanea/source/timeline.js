// timeline.js - Sistema centralizado de tiempo (20s)
class CentralTimeline {
    constructor(duration = 20.0) {
        this.duration = duration;
        this.currentTime = 0.0;
        this.isPlaying = true;
        this.isLooping = true;
        this.speed = 1.0;
    }
    update(dt) {
        if (this.isPlaying) {
            this.currentTime += dt * this.speed;
            if (this.currentTime >= this.duration) {
                if (this.isLooping) this.currentTime = 0;
                else { this.currentTime = this.duration; this.isPlaying = false; }
            }
        }
        return this.currentTime;
    }
}
window.CentralTimeline = CentralTimeline;
