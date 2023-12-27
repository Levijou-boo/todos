import { Component } from "../core/core";
import getTodo from '../../api/api';
import TodoItem from "./TodoItem";
import styles from "./TodoSection.module.scss";

export default class TodoSection extends Component {
  constructor() {
    super({
      tagName: "section",
    });
    this.init();
  }
  async init() {
    this.showLoading(); // 로딩 메시지 표시
    const todoList = await getTodo(); // 비동기 함수를 기다림
    this.render(todoList);
  }

  showLoading() {
    // 로딩 메시지를 표시하는 로직
    this.el.innerHTML = /* html */`
      <div class="${styles.loading}">
        Loading...
      </div>
    `;
  }

  render(todoList) {
    // todo리스트 items 랜더링
    if (todoList) {
      this.el.innerHTML = "";
      for (const item of todoList) {
        this.el.append(new TodoItem({ props: item }).el);
      }
    }
    // 로딩 완료 후 추가 요소 추가
    const additionalElement = document.createElement('div');
    additionalElement.innerHTML = /* html */`
    <div class=${styles.container}>
      add
    </div>
    `;
    this.el.append(additionalElement);
  }
}
