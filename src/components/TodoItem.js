import { Component } from "../core/core";
import styles from './TodoItem.module.scss';
import Loading from "./Loading";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('todo');
    console.log(this.props?.title);

    this.el.innerHTML = /* html */`
      <div class="${styles['container']}">
      <div class="loading-container"></div>
        <div class="input-check">
          <input type="checkbox" />
        </div>
        <div>
          <h3>${this.props?.title}</h3>
          <div>
            <span>생성일</span><time>2012 12 31</time>
          </div>
          <div>
            <span>수정일</span><time>2012 12 31</time>
          </div>
          <div>
            <span>1</span>
            <span>2</span>
          </div>
        </div>
      </div>
    `
    const loadingContainer = this.el.querySelector('.loading-container');
    const loadingComponent = new Loading();
    loadingContainer.appendChild(loadingComponent.el);

    if (this.props) {
      loadingComponent.hide();
    }
  }
}