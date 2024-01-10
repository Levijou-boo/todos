import { Component } from "../core/core";
import AboutComponent from "../components/AboutComponent";
export default class About extends Component {

  constructor() {
    super()
  }


  render() {

    this.el.innerHTML = /* html */`
    `;
    this.el.append(new AboutComponent().el);
  }
}
