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

const TempleOfJash = {
  name: "The Temple of Jash",
  assets: [
    require("../../../assets/temple_state_1.png"),
    require("../../../assets/temple_state_2.png"),
    require("../../../assets/temple_state_3.png"),
    require("../../../assets/temple_state_4.png")
  ]
}

const enemies = [TempleOfAeris, TempleOfJash]

export const getEnemy = (totalDefeated) => {
  return enemies[totalDefeated]
}