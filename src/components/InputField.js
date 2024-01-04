import { Component } from "../core/core";

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.el.classList.add("input-field");
  }
  render() {
    this.el.innerHTML = /*html*/ `
    <div>
      <input type="text" val="${messageStore.state.message}" />
    </div>
    
    `

  }
}
