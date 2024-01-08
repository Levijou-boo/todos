import { Component } from "../core/core";
import styles from './TodoItem.module.scss';
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import { putTodo } from "../api/todoApi";
dayjs.extend(relativeTime);
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.editMode = false;
    this.render()
  }

  //todo update
  handleTodoUpdate = (title) => {
    const todo = {
      id: this.props.id,
      title: title,
      done: this.props.done,
      order: this.props.order
    }
    putTodo(todo);
  };

  toggleEditMode() {
    this.editMode = !this.editMode;
    this.render();
  }
  handleTitleChange(event) {
    const newTitle = event.target.value;
    this.props.title = newTitle;
    this.toggleEditMode();
    this.handleTodoUpdate(newTitle);
  }

  render() {
    let todoContainer;

    if (this.editMode) {
      todoContainer = `<input class="TodoItemInput" type="text" value="${this.props?.title}" />`;
    } else {
      todoContainer = `<h3>${this.props?.title}</h3>`;
    }


    const createAt = dayjs(this.props.createdAt).fromNow();
    const updatedAt = dayjs(this.props.updatedAt).fromNow();
    this.el.innerHTML = /* html */`
    <div class="${styles['container']}" data-id="${this.props?.id}" data-order="${this.props?.order}">
        <div class="input-check">
          <input class="checkbox" type="checkbox" ${this.props.done ? 'checked' : ''} ${!this.props.id ? 'disabled' : ''}>
        </div>
        <div>
            ${todoContainer}
          <div>
            <span>Create: </span><time>${createAt}</time>
          </div>
          <div>
            <span>Update: </span><time>${updatedAt}</time>
          </div>
          <div class=${styles.menu}>
            <span class="${styles.edit} edit"></span>
            <span id="delete" class="${styles.delete} ${this.props.id ? '' : styles.disable}">
          </div>
        </div>
      </div>
    `
    this.el.querySelector('.edit').addEventListener('click', () => {
      this.toggleEditMode();
    });
    const inputElement = this.el.querySelector('.TodoItemInput');
    if (inputElement) {
      inputElement.addEventListener('change', (event) => {
        this.handleTitleChange(event);
      });
    }
    this.el.querySelector('.checkbox').addEventListener('change', () => {
      const isChecked = this.el.querySelector('.checkbox').checked;
      this.props.onTodoUpdate(this.props.id, isChecked);
    });
    this.el.querySelector('#delete').addEventListener('click', () => {
      if (this.props.id) {
        this.el.querySelector('#delete').addEventListener('click', () => {
          this.props.onDelete(this.props.id);
        });
      }
    });
  }
}
