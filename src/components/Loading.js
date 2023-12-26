import { Component } from "../core/core";
import styles from "./Loading.module.scss"

// Loading.js
export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }; // 기본적으로 로딩 상태를 true로 설정
  }

  setLoading(isLoading) {
    this.setState({ isLoading });
  }

  render() {
    this.el.innerHTML = /*html*/ `
      <div id="${styles.loadingScreen}" style="${this.state.isLoading ? '' : 'display: none;'}">
        <p>Loading...</p>
      </div>
    `;
  }
}

