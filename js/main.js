const config = {
  type: Phaser.AUTO,
  width: 780,
  height: 360,
  backgroundColor: "#000000",
  scene: [Boot, Preloader, MainMenu, MainGame],
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
};

let game = new Phaser.Game(config);
