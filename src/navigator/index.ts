import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeView from "../views/home/HomeView";
import GameMap from "../views/game-map/GameMap";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeView
  },
  GameMap: {
    screen: GameMap
  }
}, {
  headerMode: null
});

export default createAppContainer(AppNavigator)