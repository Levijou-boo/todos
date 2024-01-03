import { Component } from "../core/core";
import styles from './TheHeader.module.scss';

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
    })
  }
  render() {
    this.el.innerHTML = /* html */`
    <nav class="${styles.nav}">
    <div class="${styles['container']}">
      <div><img src="/img/logo.webp" alt="logo" /></div>
        <ul class="${styles['nav__links']}">
          <li class="${styles['nav__links__main']}">
            <a href="#/">Main!</a>
          </li>
          <li class="${styles['nav__links__about']}">
              <a href="#/about">about!</a>
            </li>
        </ul>
    </div>
    </nav>
    `
  }
}
