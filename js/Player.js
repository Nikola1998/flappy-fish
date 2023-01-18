export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "fish");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.isAlive = true;
    this.jumpForce = -250;
  }

  start() {
    this.isAlive = true;
    this.setGravityY(450);
    this.setCollideWorldBounds(true);
    this.scene.input.on("pointerdown", (pointer) => {
      this.setVelocityY(this.jumpForce);
      this.scene.sound.play("jump");
    });
  }
}
