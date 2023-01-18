import Player from "./Player.js";
import Obstacles from "./Obstacles.js";

export default class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame");

    this.player;
    this.pressClickToStartText;
    this.isGameStarted = false;

    this.obstacles;
    this.background = [];
    this.backgrounds;
  }

  create() {
    this.isGameStarted = false;
    this.backgrounds = this.physics.add.group();
    this.background.push(
      this.backgrounds.create(0, 192, "background").setScale(2)
    );
    this.background.push(
      this.backgrounds.create(1536, 192, "background").setScale(2)
    );
    this.player = new Player(this, 75, 150);

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
        this.backgrounds.setVelocityX(-50);
      }
    });
  }

  update() {
    this.obstacles.update();

    for (let i = 0; i < this.background.length; i++) {
      if (this.background[i].x < -1534) {
        this.background[i].x = 1536;
      }
    }
  }
}
