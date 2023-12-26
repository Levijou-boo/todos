import { Component } from './core/core';
import TheHeader from './components/TheHeader';
import Loading from './components/Loading';

export default class App extends Component {
  render() {
    const routerView = document.createElement('div');
    routerView.id = 'router-view';
    this.el.append(
      new Loading().el,
      new TheHeader().el,
      routerView
    );
  }
}
