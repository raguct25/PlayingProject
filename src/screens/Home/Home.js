import React, { Component } from "react";
import Game from "../../components/Game";
import SplashScreen from "react-native-splash-screen";

class App extends Component {
  state = {
    gameId: 1
  };

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }

  resetGame = () => {
    this.setState(prevState => {
      return { gameId: prevState.gameId + 1 };
    });
  };
  render() {
    return (
      <Game
        key={this.state.gameId}
        onPlayAgain={this.resetGame}
        randomNumberCount={6}
        initialSeconds={10}
      />
    );
  }
}

export default App;
