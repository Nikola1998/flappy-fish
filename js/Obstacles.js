export default class Obstacles extends Phaser.Physics.Arcade.Group {
  constructor(world, scene) {
    super(world, scene);

    this.moveSpeed = -150;
    this.spawnPositionX = 200;
    this.spawnAmount = 5;
    this.items = [];
  }

  spawn() {
    for (let i = 0; i < this.spawnAmount; i++) {
      let y = Phaser.Math.Between(-100, 100);
      let upperObstacle = this.create(this.spawnPositionX, y, "sea-weed")
        .setRotation(3.14159)
        .setPipeline("Light2D");
      let lowerObstacle = this.create(
        this.spawnPositionX,
        y + 400,
        "sea-weed"
      ).setPipeline("Light2D");
      this.spawnPositionX += 200;
      this.items.push({
        upperObstacle: upperObstacle,
        lowerObstacle: lowerObstacle,
      });
    }
  }

  start() {
    this.setVelocityX(this.moveSpeed);
  }

  update() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].upperObstacle.x < -200) {
        this.respawn(this.items[i]);
        this.scene.score++;
        this.scene.scoreText.setText("score: " + this.scene.score);
      }
    }
  }

  respawn(item) {
    item.upperObstacle.x = this.spawnPositionX - 400;
    item.lowerObstacle.x = this.spawnPositionX - 400;

    let y = Phaser.Math.Between(-100, 100);
    item.upperObstacle.y = y;
    item.lowerObstacle.y = y + 400;
  }
}
