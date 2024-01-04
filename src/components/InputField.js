import { Component } from "../core/core";
import styles from "./InputField.module.scss";
export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.el.classList.add(`${styles["input-field"]}`);
  }
  render() {
    this.el.innerHTML = /*html*/ `
      <input class= ${styles["simple-input"]} type = "text" placeholder="끝났다는 것은 다시 시작된다는 것을" />
      <button class=${styles.btn}>
      <p>+</p>
      </button>
    `
    this.el.querySelector('button').addEventListener('click', () => {
      const inputEl = this.el.querySelector('input');
      const value = inputEl.value
      this.props.onCreate(value);
      inputEl.value = "";
    });
  }
}
