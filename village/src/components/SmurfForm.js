import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      age: this.props.age,
      height: this.props.height
    };
  }

  static defaultProps = {
    name: "",
    age: "",
    height: "",
    submitBtnText: "Add to the village"
  };

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;

    this.props.handleSubmit(
      { name, age, height },
      this.props.history.push,
      this.props.id
    );

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form className="form" onSubmit={this.addSmurf}>
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="submit-btn" type="submit">
            {this.props.submitBtnText}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
