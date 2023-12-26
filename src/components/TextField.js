import { Component } from "../core/core";
import messageStore from "../store/message";

export default class TextField extends Component {
  render() {
    this.el.innerHTML = /*html*/ `
    <input type="text" val="${messageStore.state.message}" />
    `
    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      console.log(inputEl.value);
      messageStore.state.message = inputEl.value;
    })
  }

}
