import Player from "./Player.js";

export default class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame");

    this.player;
    this.pressClickToStartText;
  }

  create() {
    this.add.image(192, 192, "background").setScale(2);
    this.player = new Player(this, 55, 40);

    this.pressClickToStartText = this.add.text(195, 100, "Click To Start", {
      fontSize: "62px",
      fill: "#fff",
    });

    this.input.on("pointerdown", (pointer) => {
      this.player.start();
      this.pressClickToStartText.destroy();
    });
  }

  update() {}

  jump() {
    this.player.test();
  }
}
