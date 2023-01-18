import Player from "./Player.js";
import Obstacles from "./Obstacles.js";

export default class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame");

    this.player;
    this.pressClickToStartText;
    this.isGameStarted = false;

    this.obstacles;
  }

  create() {
    this.isGameStarted = false;
    this.add.image(192, 192, "background").setScale(2);
    this.player = new Player(this, 75, 40);

    this.obstacles = new Obstacles(this.physics.world, this);
    this.obstacles.spawn();

    this.pressClickToStartText = this.add.text(195, 100, "Click To Start", {
      fontSize: "62px",
      fill: "#fff",
    });

    this.input.on("pointerdown", (pointer) => {
      if (!this.isGameStarted) {
        this.player.start();
        this.pressClickToStartText.destroy();
        this.obstacles.start();
        this.isGameStarted = true;
        this.sound.play("start");
      }
    });
  }

  update() {
    this.obstacles.update();
  }
}
