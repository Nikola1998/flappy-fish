export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "fish");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.isAlive = true;
    this.jumpForce = -250;
    this.particles;
    this.emitter;
  }

  start() {
    this.isAlive = true;
    this.setGravityY(450);
    this.setCollideWorldBounds(true);
    this.particles = this.scene.add.particles("bubble").setPipeline("Light2D");
    this.emitter = this.particles.createEmitter({
      alpha: { start: 1, end: 0 },
      scale: { start: 0.2, end: 0.2 },
      blendMode: "ADD",
      speedX: -130,
      speedY: -50,
      frequency: 50,
    });
    this.emitter.startFollow(this);
    this.scene.input.on("pointerdown", (pointer) => {
      if (this.isAlive) {
        this.setVelocityY(this.jumpForce);
        this.scene.sound.play("jump");
      }
    });
  }

  die() {
    this.isAlive = false;
    this.body.stop();
    this.scene.sound.play("die");
    this.emitter.stop();
    this.setTint(0xff0000);
  }
}
