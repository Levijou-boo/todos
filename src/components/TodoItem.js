import { Component } from "../core/core";
import styles from './TodoItem.module.scss';
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import { delTodo } from "../api/todoApi";
dayjs.extend(relativeTime);
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isChecked = this.props.done ? 'checked' : '';

    const createAt = dayjs(this.props.createdAt).fromNow();
    const updatedAt = dayjs(this.props.updatedAt).fromNow();
    this.el.innerHTML = /* html */`
    <div class="${styles['container']}" data-id="${this.props?.id}" data-order="${this.props?.order}">
        <div class="input-check">
          <input class="checkbox" type="checkbox" ${this.props.done ? 'checked' : ''}>
        </div>
        <div>
          <h3>${this.props?.title}</h3>
          <div>
            <span>Create: </span><time>${createAt}</time>
          </div>
          <div>
            <span>Update: </span><time>${updatedAt}</time>
          </div>
          <div>
            <span id="delete" class="${styles.delete}"></span>
            <span class="${styles.edit}"></span>
          </div>
        </div>
      </div>
    `
    this.el.querySelector('.checkbox').addEventListener('change', () => {
      const isChecked = this.el.querySelector('.checkbox').checked;
      this.props.onTodoUpdate(this.props.id, isChecked);
    });
    this.el.querySelector('#delete').addEventListener('click', () => {
      console.log('clicking delete');
    })
  }
}
