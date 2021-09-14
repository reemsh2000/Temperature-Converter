import React from "react";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "./utils";
class Form extends React.Component {
  state = {
    tempreture: 0,
    type: "celsius",
  };
  setTemp = (event) => {
    this.setState({ tempreture: event.target.value });
  };
  setType = (event) => {
    this.setState({ type: event.target.value });
  };

  render() {
    const { tempreture, type } = this.state;
    return (
      <form>
        <h1>Temperature converter</h1>
        <fieldset style={{width:'400px',margin:'auto'}}>
          <legend>Type</legend>
          <input
            type="radio"
            name="temp" // name groups the inputs
            value="celsius"
            onChange={this.setType}
          />
          Celsius
          <input
            type="radio"
            name="temp"
            value="fahrenheit"
            onChange={this.setType}
          />
          Fahrenheit
          </fieldset>
          <input value={tempreture} onChange={this.setTemp} type="number" style={{margin:'10px'}} />
          <br />
          <br />
          <h2>
            {type === "celsius"
              ? celsiusToFahrenheit(tempreture) + "F"
              : fahrenheitToCelsius(tempreture) + "C"}
          </h2>
      
      </form>
    );
  }
}
export default Form;
