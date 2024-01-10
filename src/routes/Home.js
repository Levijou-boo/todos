import { Component } from "../core/core";
import TodoSection from "../components/TodoSection";
import SannabiScroll from "../components/SannabiScroll";
import Rellax from "rellax";

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {

    this.el.innerHTML = /* html */``;


    this.el.append(new SannabiScroll().el); // SannabiScroll 요소 추가
    this.el.append(new TodoSection().el); // TodoSection 요소 추가
  }
}
