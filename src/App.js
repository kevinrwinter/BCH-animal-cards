import React, { Component } from "react";

import { animals } from "./animals"; // Specified No need to specify js file type
import Card from "./components/Card"; // Named export default

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

  searchHandler = (e) => {
    // console.log(e.target.value);
    console.log(this.state.search);

    // // Don't mutate state directly
    // this.state.search = e.target.value;

    this.setState({ search: e.target.value });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <main>
        <h1>Creatures left: {this.state.animals.length}</h1>
        <input type="text" onChange={this.searchHandler} />
        <h3>{this.state.search}</h3>
        <div className="animals-list">
          {/* This is props list */}
          {animalFilter.map((animal) => (
            <Card
              // search={animal.search}
              search={this.state.search}
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
      </main>
    );
  }
}

export default App;
