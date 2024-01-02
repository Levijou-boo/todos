import { Component } from "../core/core";
import getTodo from '../../api/api';
import TodoItem from "./TodoItem";
import styles from "./TodoSection.module.scss";
import Loading from "./Loading";

export default class TodoSection extends Component {
  constructor() {
    super({ tagName: "section" });
    this.init();
  }

  async init() {
    this.showLoading(); // 로딩 창 표시
    const todoList = await getTodo(); // 데이터 로딩 및 저장
    setTimeout(() => this.render(todoList), 1000); // 최소 1초 후 렌더링
  }

  showLoading() {
    this.el.innerHTML = ''; // 기존 내용 비움
    const loading = new Loading(); // Loading 인스턴스 생성
    this.el.appendChild(loading.el); // Loading 인스턴스 추가
  }

  render(todoList) {
    this.el.innerHTML = ''; // 로딩 컴포넌트 숨김 및 내용 비움
    // todoList 렌더링
    if (todoList) {
      for (const item of todoList) {
        this.el.append(new TodoItem({ props: item }).el);
      }
    }

    // 추가 요소 추가
    const additionalElement = document.createElement('div');
    additionalElement.innerHTML = /* html */`
      <div class=${styles["add-container"]}>
        add
      </div>
    `;
    this.el.append(additionalElement);
  }
}
