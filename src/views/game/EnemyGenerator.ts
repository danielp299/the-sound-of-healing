import { MAX_ENEMIES_DEFEAT } from './../../constants/index';

const TempleOfAeris = {
  name: "The Temple of Aeris",
  assets: [
    require("../../../assets/temple_state_1.png"),
    require("../../../assets/temple_state_2.png"),
    require("../../../assets/temple_state_3.png"),
    require("../../../assets/temple_state_4.png")
  ]
}

const ColiseumOfJash = {
  name: "Coliseum of Jash",
  assets: [
    require("../../../assets/coliseum_state_1.png"),
    require("../../../assets/coliseum_state_2.png"),
    require("../../../assets/coliseum_state_3.png")
  ]
}

const King = {
  name: "King Iroh",
  assets: [
    require("../../../assets/king_state_1.png"),
    require("../../../assets/king_state_2.png"),
    require("../../../assets/king_state_5.png")
  ]
}

const enemies = [ColiseumOfJash, TempleOfAeris, King]

export const TOTAL_ENEMIES = enemies.length;

export const getEnemy = (totalDefeated) => {
  return enemies[totalDefeated]
}