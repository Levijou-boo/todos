import { Component } from "../core/core";
import styles from "./Loading.module.scss"

// Loading.js
export default class Loading extends Component {
  constructor() {
    super();
    this.el.innerHTML = /* html */`
      <div class="${styles['loading-screen']}">
        Loading...
      </div>
    `;
  }

  show() {
    this.el.style.display = 'block';
  }

  hide() {
    this.el.style.display = 'none';
  }
}

