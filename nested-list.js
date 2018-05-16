import React from "react";
import { render } from "react-dom";

const games = {
  "Tuk Tuk GO": {
    folders: {
      Buildings: [
        {
          url: "http://svarunan.imgix.net/sprites/buildings/Build_12.png",
          bx: "115",
          by: "3",
          bh: "52",
          bw: "75",
          bm: "normal"
        },
        {
          url: "http://svarunan.imgix.net/sprites/buildings/Build_02.png",
          bx: "35",
          by: "21",
          bh: "30",
          bw: "119",
          bm: "normal"
        },
        {
          url: "http://svarunan.imgix.net/sprites/buildings/Build_18.png",
          bx: "17",
          by: "91",
          bh: "23",
          bw: "75",
          bm: "normal"
        },
        {
          url: "http://svarunan.imgix.net/sprites/buildings/Build_20.png",
          bx: "25",
          by: "45",
          bh: "0",
          bw: "50",
          bm: "normal"
        },
        {
          url: "http://svarunan.imgix.net/sprites/buildings/Build_19.png",
          bx: "42",
          by: "90",
          bh: "0",
          bw: "50",
          bm: "normal"
        },
        {
          url: "http://svarunan.imgix.net/sprites/buildings/Build_10.png",
          bx: "28",
          by: "45",
          bh: "0",
          bw: "50",
          bm: "normal"
        }
      ],
      Momuments: [
        {
          url: "http://svarunan.imgix.net/sprites/monuments/Monument_03.png",
          bx: "233",
          by: "50",
          bh: "0",
          bw: "80",
          bm: "normal"
        },
        {
          url: "http://svarunan.imgix.net/sprites/monuments/Monument_05.png",
          bx: "158",
          by: "70",
          bh: "0",
          bw: "60",
          bm: "normal"
        },
        {
          url: "http://svarunan.imgix.net/sprites/monuments/Monument_06.png",
          bx: "26",
          by: "151",
          bh: "0",
          bw: "60",
          bm: "normal"
        },
        {
          url: "http://svarunan.imgix.net/sprites/monuments/Monument_08.png",
          bx: "43",
          by: "22",
          bh: "0",
          bw: "55",
          bm: "normal"
        },
        {
          url: "http://svarunan.imgix.net/sprites/monuments/Monument_09.png",
          bx: "26",
          by: "150",
          bh: "0",
          bw: "35",
          bm: "normal"
        }
      ]
    },
    baseURL: "http://svarunan.imgix.net/sprites/"
  }
};

const styles = {
  UL: {
    listStyleType: "none"
  },
  LI: {
    cursor: "pointer"
  }
};

class App extends React.Component {
  state = {
    structure: "",
    game: ""
  };

  onStructureClick = e => {
    const game = e.target.parentNode.id;
    const structure = e.target.id;
    const { game: currentGame, structure: currentStructure } = this.state;
    if (game === currentGame && structure === currentStructure) {
      this.setState({ game: "", structure: "" });
    } else {
      this.setState({ game, structure });
    }
  };

  renderGameStructures = gameName => {
    return Object.keys(games[gameName].folders).map((structure, index) => {
      return (
        <li
          key={index}
          style={styles.LI}
          id={structure}
          onClick={this.onStructureClick}
        >
          {structure}
        </li>
      );
    });
  };

  renderImages = (gameName, structure) => {
    return (
      <ul style={styles.UL}>
        {games[gameName].folders[structure].map((item, index) => {
          return (
            <li key={index} style={styles.LI}>
              <img style={{ width: "50px", height: "50px" }} src={item.url} />
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    const { game, structure } = this.state;
    return (
      <div>
        <ul style={styles.UL}>
          {Object.keys(games).map(gameKey => {
            return (
              <li key={gameKey} style={styles.LI}>
                {gameKey}
                <ul style={styles.UL} id={gameKey}>
                  {this.renderGameStructures(gameKey)}
                </ul>
              </li>
            );
          })}
        </ul>
        {game && structure && this.renderImages(game, structure)}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
