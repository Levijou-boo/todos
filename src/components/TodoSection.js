import { Component } from "../core/core";
import { getTodos } from '../api/todoApi';
import TodoItem from "./TodoItem";
import styles from "./TodoSection.module.scss";
import Loading from "./Loading";
import InputField from "./InputField";
import Sortable from 'sortablejs';

export default class TodoSection extends Component {
  constructor() {
    super({ tagName: "section" });
    this.el.className = "Todo-Section";
    this.init();
    this.todoList = [];
  }

  async init() {
    this.showLoading(); // 로딩 창 표시
    const todoList = await getTodos(); // 데이터 로딩 및 저장
    this.todoList = todoList;
    await this.render(todoList); // 데이터를 사용하여 렌더링
    this.hideLoading(); // 로딩 인디케이터 제거
  }

  showLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.classList.remove(`${styles.hidden}`);
  }

  // 로딩 인디케이터 숨기기
  hideLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.classList.add(`${styles.hidden}`);
  }

  // 로딩 인디케이터 토글
  toggleLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.classList.toggle(`${styles.hidden}`);
  }

  createTodoContainer() {
    const todoContainer = document.createElement('div');
    todoContainer.className = 'todo-container';
    todoContainer.Id
    return todoContainer;
  }

  createCompletedContainer() {
    const completedContainer = document.createElement('div');
    completedContainer.className = 'completed-container';
    return completedContainer;
  }
  handleTodoUpdate = (id, done) => {
    console.log('handleTodoUpdate', id, done);
    const todoIndex = this.todoList.findIndex(item => item.id === id);
    if (todoIndex > -1) {
      this.todoList[todoIndex].done = done;
      this.render(this.todoList)
    }
  };

  // todolist 랜더링
  renderTodoList(todoList, todoContainer, completedContainer) {
    for (const item of todoList) {
      const todoItem = new TodoItem({ props: { ...item, onTodoUpdate: this.handleTodoUpdate } }).el;
      if (item.done) {
        completedContainer.appendChild(todoItem);
      } else {
        todoContainer.appendChild(todoItem);
      }
    }
  }



  render(todoList) {
    this.el.innerHTML = ''; // 로딩 컴포넌트 숨김 및 내용 비움
    // 새로운 래퍼 div 생성
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = `${styles.wrapper}`; // 래퍼 div에 클래스 이름 추가

    const todoContainer = this.createTodoContainer();
    const completedContainer = this.createCompletedContainer();

    if (todoList) {
      this.renderTodoList(todoList, todoContainer, completedContainer);
    }


    wrapperDiv.appendChild(todoContainer); // todoContainer를 wrapperDiv에 추가
    wrapperDiv.appendChild(completedContainer); // completedContainer를 wrapperDiv에 추가

    // SortableJS 적용
    new Sortable(todoContainer, {
      animation: 150, // 드래그 애니메이션 속도
      ghostClass: `${styles['sortable-ghost']}` // 드래그 시 적용할 CSS 클래스
    });
    this.el.appendChild(new InputField().el);
    this.el.appendChild(wrapperDiv); // wrapperDiv를 this.el에 추가
  }

}
