import { Component } from "../core/core";
import styles from "./AboutComponent.module.scss";
// core version + navigation, pagination modules:
import Swiper from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default class AboutComponent extends Component {
  constructor(props) {
    super(props);
  }
  showLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.classList.remove(`${styles.hidden}`);
  }

  // 로딩 인디케이터 숨기기
  hideLoading() {
    const loadingElement = document.getElementById('loading');
    loadingElement.classList.add(`${styles.hidden}`);
  }

  render() {
    console.log(styles)
    this.hideLoading();
    this.el.innerHTML = /*html*/ `
      <section class='about'>
        <div class=${styles.topimg}></div>
        <article class=${styles["introduce"]}>
          <h2>그룹소개</h2>
          <div class=${styles["introduce__wrapper"]}>
            <div>
              <h3>Mago Construction</h3>
              <img src="/img/Ellipse 1.png" alt="" />
            </div>
            <div>
              <h3>Mago Trading</h3>
              <img src="/img/Ellipse 1.png" alt="" />
            </div>
            <div>
              <h3>Mago Electronics</h3>
              <img src="/img/Ellipse 1.png" alt="" />
            </div>
            <div>
            <h3 style="color: #f4c15d;">Mago Group</h3>
              <img src="/img/Ellipse 2.png" alt="" />
            </div>
          </div>
        </article>
        <div class=${styles["back2"]}>
        </div>
     
      </section>
    
    `

    setTimeout(function () {
      new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 110,
        freeMode: true,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: 3000,
        autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
          delay: 3000,   // 시간 설정
          disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
      });
    }, 0);
  }
}
