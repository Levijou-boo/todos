import { Component } from "../core/core";

export default class About extends Component {

  constructor() {
    super()
  }

  render() {
    const { a, b, c } = history.state || {};
    this.el.innerHTML = /* html */`
     <h1>About Page</h1>
     <h1>${a}</h1>
     <h1>${b}</h1>
     <h1>${c}</h1>
    `
  }
}
