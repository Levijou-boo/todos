import { Component } from "../core/core";
import TodoSection from "../components/TodoSection";


export default class Home extends Component {

  constructor() {
    super();

  }

  render() {
    this.el.innerHTML = /* html */`
     <h1>Home Page</h1>
    `
    this.el.append(new TodoSection().el);
  }

}
