// NOTE: Component
export class Component {
  constructor(payload = {}) {
    const {
      tagName = 'div', // 최상위 요소의 태그 이름
      props = {},
      state = {}
    } = payload
    this.el = document.createElement(tagName) // 컴포넌트의 최상위 요소
    this.props = props // 컴포넌트가 사용될 때 부모 컴포넌트에서 받는 데이터
    this.state = state // 컴포넌트 안에서 사용할 데이터
    this.render()
  }
  render() { // 컴포넌트를 렌더링하는 함수
  }
}


// NOTE: Router
function routeRender(routes) {
  const routerView = document.querySelector('#router-view');
  const targetRoute = routes.find(route => route.path === location.pathname);

  if (targetRoute && targetRoute.component) {
    const componentInstance = new targetRoute.component();
    componentInstance.render();
    routerView.innerHTML = ''; // 기존 내용을 지웁니다.
    routerView.appendChild(componentInstance.el); // 컴포넌트의 최상위 요소를 추가합니다.
  } else {
    const notFoundRoute = routes.find(route => route.path === '/404');
    const notFoundComponentInstance = new notFoundRoute.component();
    notFoundComponentInstance.render();

    routerView.innerHTML = '';
    routerView.appendChild(notFoundComponentInstance.el);
  }
}
export function createRouter(routes) {
  return function () {
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}


// NOTE: Store
export class Store {
  constructor(state) {
    this.state = {} // 상태(데이터)
    this.observers = {}
    for (const key in state) {
      // 각 상태에 대한 변경 감시(Setter) 설정!
      Object.defineProperty(this.state, key, {
        // Getter
        get: () => state[key],
        // Setter
        set: val => {
          state[key] = val
          if (Array.isArray(this.observers[key])) { // 호출할 콜백이 있는 경우!
            this.observers[key].forEach(observer => observer(val))
          }
        }
      })
    }
  }
  // 상태 변경 구독!
  subscribe(key, cb) {
    Array.isArray(this.observers[key]) // 이미 등록된 콜백이 있는지 확인!
      ? this.observers[key].push(cb) // 있으면 새로운 콜백 밀어넣기!
      : this.observers[key] = [cb] // 없으면 콜백 배열로 할당!

    // 예시)
    // observers = {
    //   구독할상태이름: [실행할콜백1, 실행할콜백2]
    //   movies: [cb, cb, cb],
    //   message: [cb]
    // }
  }
}