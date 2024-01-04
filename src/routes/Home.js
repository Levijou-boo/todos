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

    const sannabiScroll = new SannabiScroll().el; // SannabiScroll 인스턴스 생성
    this.el.append(sannabiScroll); // SannabiScroll 요소 추가
    this.el.append(new TodoSection().el); // TodoSection 요소 추가
    document.addEventListener('DOMContentLoaded', () => {
      new Rellax('#rellax');
    });
  }
}
