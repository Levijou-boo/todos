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
    console.log(todoList);
  }

  render(todoList) {

    this.el.innerHTML = /* html */`
     <h1>Home Page</h1>
    `
    if (todoList) {
      for (const item of todoList) {

        this.el.append(new TodoItem({ props: item }).el);
      }
    }
  }

}
