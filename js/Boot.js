export default class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("background", "assets/background.png");
  }

  create() {
    this.registry.set("highscore", 0);
    this.scene.start("Preloader");
  }
}
