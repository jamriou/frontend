import axios from "axios";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "" };
  }

  getClass = async () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    try {
      const request = await axios({
        method: "get",
        url,
      });
      console.log(request.data);
      this.setState((state) => {
        return { class: request.data };
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="App">
        <button
          onClick={async () => {
            await this.getClass();
          }}
        >
          Piger une classe
        </button>
        <div>{this.state.class}</div>
      </div>
    );
  }
}

export default App;
