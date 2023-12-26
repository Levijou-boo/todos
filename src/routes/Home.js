import { Component } from "../core/core";
import TodoItem from "../components/TodoItem";
import getTodo from '../../api/api';

export default class Home extends Component {

  constructor() {
    super();
    this.init();
  }

  async init() {
    const todoList = await getTodo(); // 비동기 함수를 기다림
    this.render(todoList);
  }

  render(todoList) {

    this.el.innerHTML = /* html */`
     <h1>Home Page</h1>
    `
    this.el.append(new TodoItem({ props: todoList }).el);
  }
}
