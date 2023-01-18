export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "fish");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.isAlive = true;
    this.jumpForce = -150;
  }

  start() {
    this.isAlive = true;
    this.setGravityY(200);
    this.setCollideWorldBounds(true);

    this.scene.input.on("pointerdown", (pointer) => {
      this.setVelocityY(this.jumpForce);
    });
  }

  kill() {
    this.isAlive = false;

    this.body.stop();
  }

  update() {}

  test() {
    console.log("test works");
  }
}
