import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeView from "../views/home/HomeView";
import Game from "../views/game/Game";
import CreditsView from "../views/credits/CreditsView";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeView
  },
  Credits: {
    screen: CreditsView
  },
  Game: {
    screen: Game
  }
}, {
  headerMode: null
});

export default createAppContainer(AppNavigator)