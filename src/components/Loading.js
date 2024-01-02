import { Component } from "../core/core";
import styles from './TodoItem.module.scss';

export default class Loading extends Component {
  render() {
    this.el.innerHTML = /* html */`
      <div class="${styles.loadingBackground}">
        <div class="${styles.spinner}"></div>
      </div>
    `;
  }
}
