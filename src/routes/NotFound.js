// NotFound.js
import { Component } from "../core/core";

export default class NotFound extends Component {
  render() {
    this.el.innerHTML = /* html */`
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you requested does not exist.</p>
    `;
  }
}
