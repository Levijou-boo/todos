import { Component } from "../core/core";
import styles from "./InputField.module.scss";
export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.el.classList.add(`${styles["input-field"]}`);
  }
  render() {
    this.el.innerHTML = /*html*/ `
      <input class= ${styles["simple-input"]} type = "text" val = "" />
      <button class=${styles.btn}>
      <p>+</p>
      </button>
    `

  }
}
