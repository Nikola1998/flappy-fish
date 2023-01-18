export default class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.music = this.sound.play("theme", { loop: true });
    this.add.image(192, 192, "background").setScale(2);

    this.loadText = this.add.text(195, 100, "Flappy Fish", {
      fontSize: "62px",
      fill: "#fff",
    });
    this.loadText = this.add.text(295, 180, "click to play", {
      fontSize: "18px",
      fill: "#fff",
    });

    // this.input.once("pointerdown", () => {
    //   this.scene.start("MainGame");
    // });
  }
}
