import Boot from "./Boot.js";
import MainMenu from "./MainMenu.js";
import Preloader from "./Preloader.js";
import MainGame from "./Game.js";

const config = {
  type: Phaser.AUTO,
  width: 780,
  height: 360,
  backgroundColor: "#639bff",
  scene: [Boot, Preloader, MainMenu, MainGame],
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
};

let game = new Phaser.Game(config);
