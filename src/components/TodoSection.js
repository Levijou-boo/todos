import { Component } from "../core/core";
import { getTodos } from '../api/todoApi';
import TodoItem from "./TodoItem";
import styles from "./TodoSection.module.scss";
import Loading from "./Loading";
import Sortable from 'sortablejs';

export default class TodoSection extends Component {
  constructor() {
    super({ tagName: "section" });
    this.init();
  }

  async init() {
    this.showLoading(); // 로딩 창 표시
    const todoList = await getTodos(); // 데이터 로딩 및 저장
    setTimeout(() => this.render(todoList), 1000); // 최소 1초 후 렌더링
  }

  showLoading() {
    this.el.innerHTML = ''; // 기존 내용 비움
    const loading = new Loading(); // Loading 인스턴스 생성
    this.el.appendChild(loading.el); // Loading 인스턴스 추가
  }

  render(todoList) {
    this.el.innerHTML = ''; // 로딩 컴포넌트 숨김 및 내용 비움

    // 할 일 목록 컨테이너 생성
    const todoContainer = document.createElement('div');
    todoContainer.className = 'todo-container'; // 컨테이너에 클래스 이름 추가

    // todoList 렌더링
    if (todoList) {
      for (const item of todoList) {
        const todoItem = new TodoItem({ props: item }).el;
        todoContainer.appendChild(todoItem); // 컨테이너에 할 일 아이템 추가
      }
    }

    this.el.appendChild(todoContainer); // 전체 컨테이너를 this.el에 추가

    // SortableJS 적용
    new Sortable(todoContainer, {
      animation: 150, // 드래그 애니메이션 속도
      ghostClass: `${styles['sortable-ghost']}` // 드래그 시 적용할 CSS 클래스
    });

    // 추가 요소 추가
    const additionalElement = document.createElement('div');
    additionalElement.innerHTML = /* html */`
      <div class="${styles["add-container"]}">
        add
      </div>
    `;
    this.el.appendChild(additionalElement);
  }

}