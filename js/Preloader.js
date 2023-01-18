export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    this.load.image("sea-weed", "assets/sea-weed.png");
    this.load.image("fish", "assets/fish.png");

    this.load.audio("die", "assets/sounds/die.mp3");
    this.load.audio("jump", "assets/sounds/jump.mp3");
    this.load.audio("theme", "assets/sounds/theme.mp3");
    this.load.audio("start", "assets/sounds/start.mp3");
  }

  create() {
    this.add.image(192, 180, "background").setScale(2);

    this.loadText = this.add.text(32, 32, "LOADING...", {
      fontSize: "32px",
      fill: "#000",
    });

    if (this.sound.locked) {
      this.loadText.setText("Click to Start");

      this.input.once("pointerdown", () => {
        this.scene.start("MainMenu");
      });
    } else {
      this.scene.start("MainMenu");
    }
  }
}
