import { Component } from "../core/core";
import styles from "./AboutComponent.module.scss";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles



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
        <article class=${styles["slider-wrapper"]}>
        <div class="swiper mySwiper ${styles.swiper}">
          <div class="swiper-wrapper ${styles["swiper-wrapper"]}">
            <div class="swiper-slide ${styles["swiper-slide"]}">
              <img src="/img/wfpXqAU6D45LO1jg8GGRXPXwJPPAuyY3JjTLsO7yXDKHeiPqyMuZPGNq-R8BFRCWzq75vhChjCvnux5XOGyIQ6a1JYEmthzIvVrpp7tkmyzH09dy8FEYnAVHiDlR-dyuU7hRjP6DyeTBVjPZzVuZwQ.webp" alt="" />
            </div>
            <div class="swiper-slide ${styles["swiper-slide"]}">
            <img src="/img/xm68NH1fK_mqQM-BkfM4a0zO_e9eS_FBboFn57_8hhh5iD7Ey6gvdlTfnEDFBhrqzlGAsl-bNESVUTNwAc9fZRRquZKMiaFuujKeV8dqpV2S7zAahQ6FRb9WtRMDNA6qoSenyiYVU_WLEoWwLphCsA.webp" alt="" />
          </div>
          <div class="swiper-slide ${styles["swiper-slide"]}">
          <img src="/img/4ooHzo_KLNYYrh5CMcZALkCglfXm7smmqX6yf_78Cpf81NjBQbyDPKMLFAGao3KmMhCPIswoU36Wf7dPhABfcsT5Ma_-x1hmifNFI-DerkUAgUS1qOsuUe5kn3kRMFqiZkUjpZ7RqvnwtfXQFNvmTw.webp" alt="" />
        </div>
        <div class="swiper-slide ${styles["swiper-slide"]}">
        <img src="/img/1ebwxsys-XtwSBLp89zdH86rgHpAzX_kp9FXgUZfL8OQM3HmcU72WfirODZp_-lA7u5yTd9bS4YvzKJNaZfDoH-m_Nx_74d3c0LogCOfAhtnYzuwddUVUQZy4Ad8Kh1XH3OTs0SBZ1n9G95eEDt-MA.webp" alt="" />
      </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        </article>
      </section>
    
    `
    setTimeout(function () {
      new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        loop: true, // 반복 재생을 활성화
        autoplay: {
          delay: 1000, // 자동 재생 간격(밀리초 단위)
          disableOnInteraction: true, // 사용자 상호작용 후에도 자동 재생 계속
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: false, // 페이지네이션 클릭 가능 여부
        },
      });
    }, 0);
  }
}
