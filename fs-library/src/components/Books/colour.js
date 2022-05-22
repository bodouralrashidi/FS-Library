import React from "react";
import { ColorExtractor } from "react-color-extractor";

const IMAGE_ONE = "https://i.imgur.com/OCyjHNF.jpg";

const IMAGE = IMAGE_ONE;

const IMAGE_STYLES = { width: 700, height: 500 };

const SWATCHES_STYLES = {
  marginTop: 20,
  display: "flex",
  justifyContent: "center"
};

export class Basic extends React.Component {
  state = { colors: [] };

  renderSwatches = () => {
    const { colors } = this.state;

    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100
          }}
        />
      );
    });
  };

  getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }));

  render() {
    return (
      <div>
        <ColorExtractor getColors={this.getColors}>
          <img src={IMAGE} style={IMAGE_STYLES} />
        </ColorExtractor>
        <div style={SWATCHES_STYLES}>{this.renderSwatches()}</div>
      </div>
    );
  }
}
