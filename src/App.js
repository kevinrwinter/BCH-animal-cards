import React, { Component } from "react";

import { animals } from "./animals"; // Specified No need to specify js file type
import Card from "./components/Card"; // Named export default

// import "./App.css";

// import Button from "./components/Button";

class App extends Component {
  // Primary building block
  state = {
    animals: animals,
    isLoading: false,
    search: "",
  };

  removeHandler = (name) => {
    console.log("Remove btn clicked", name);

    const updatedArray = this.state.animals.filter((animal) => animal.name !== name);

    this.setState({
      animals: updatedArray,
    });
  };

  addLikeHandler = (name) => {
    console.log("add was clicked and name is:", name);
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="animals-list">
        {/* <h1>Animals app</h1> */}
        {this.state.animals.map((animal) => (
          <Card
            key={animal.name}
            name={animal.name}
            like={animal.likes}
            // Binding method
            // remove={this.removeHandler.bind(this, animal.name)} />
            delete={() => this.removeHandler(animal.name)}
            add={() => this.addLikeHandler(animal.name)}
          />
        ))}
      </div>
    );
  }
}

export default App;
