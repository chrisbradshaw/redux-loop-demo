import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Display } from "./ui/display";
import "./styles.css";

class App extends React.Component {
  state = {
    components: [0]
  };

  add = () => {
    const components = Array.from(this.state.components);
    components.push(components.length);
    this.setState({
      components
    });
  };

  remove = () => {
    const components = Array.from(this.state.components);
    components.shift();
    this.setState({
      components
    });
  };

  render() {
    return (
      <Provider store={store}>
        <button onClick={this.add}>Add</button>
        <button onClick={this.remove}>Remove</button>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {this.state.components.map(c => (
            <Display key={c} />
          ))}
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
