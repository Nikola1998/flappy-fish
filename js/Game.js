import Player from "./Player.js";
import Obstacles from "./Obstacles.js";

export default class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame");

    this.player;
    this.introText;
    this.isGameStarted = false;

    this.obstacles;
    this.background = [];
    this.backgrounds;

    this.enemyCollider;
    this.spotlight;
  }

  create() {
    this.isGameStarted = false;
    this.backgrounds = this.physics.add.group();
    this.background.push(
      this.backgrounds
        .create(0, 192, "background")
        .setScale(2)
        .setPipeline("Light2D")
        .refreshBody()
    );
    this.background.push(
      this.backgrounds
        .create(1536, 192, "background")
        .setScale(2)
        .setPipeline("Light2D")
        .refreshBody()
    );
    this.player = new Player(this, 75, 150);

    this.obstacles = new Obstacles(this.physics.world, this);
    this.obstacles.spawn();

    this.lights.enable();
    this.lights.setAmbientColor(0x808080);
    this.spotlight = this.lights.addLight(100, 100, 100).setIntensity(1);

    this.enemyCollider = this.physics.add.overlap(
      this.player,
      this.obstacles,
      this.killPlayer,
      null,
      this
    );

    this.introText = this.add.text(130, 140, "Click To Start", {
      fontSize: "62px",
      fill: "#fff",
    });

    this.input.on("pointerdown", (pointer) => {
      if (!this.isGameStarted) {
        this.player.start();
        this.tweens.add({
          targets: this.introText,
          alpha: 0,
          duration: 300,
        });
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

    this.spotlight.x = this.player.x;
    this.spotlight.y = this.player.y;
  }

  killPlayer(player, obstacle) {
    this.gameOver();
  }

  gameOver() {
    this.sound.stopAll();
    this.player.die();
    this.physics.pause();

    this.introText.setText("You Have Died!");

    this.tweens.add({
      targets: this.introText,
      alpha: 1,
      duration: 300,
    });

    this.input.once("pointerdown", () => {
      this.scene.start("MainMenu");
    });
  }
}
