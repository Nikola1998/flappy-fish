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
      let upperObstacle = this.create(
        this.spawnPositionX,
        y,
        "sea-weed"
      ).setRotation(3.14159);
      let lowerObstacle = this.create(this.spawnPositionX, y + 400, "sea-weed");
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

  update() {}
}
