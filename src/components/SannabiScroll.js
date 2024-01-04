import { Component } from "../core/core";
import styles from './SannabiScroll.module.scss';


export default class SannabiScroll extends Component {


    render() {
        this.el.classList.add('sannabi-scroll');
        this.el.innerHTML = /* html */`
    <div class="${styles.back}">
      <div id="rellax" class="${styles.mountain3} ${styles.rellax}" data-rellax-speed="1">
          <img src="/img/Spr_PRLG_Forest_BG_Mountain.png" alt="a">
      </div>
      <div id="rellax" class="${styles.mountain4} ${styles.rellax}" data-rellax-speed="1">
          <img src="/img/Spr_PRLG_Forest_BG_Mountain.png" alt="">
      </div>
      <div id="rellax" class="${styles.cloud2} ${styles.rellax}" data-rellax-speed="-30">
          <img src="/img/Spr_PRLG_Forest_BG_Cloud.png" alt="">
      </div>
      <div id="rellax" class="${styles.mountain1} ${styles.rellax}" data-rellax-speed="-10">
          <img src="/img/Spr_PRLG_Forest_BG_Mountain.png" alt="">
      </div>
      <div id="rellax" class="${styles.mountain2} ${styles.rellax} mountain2" data-rellax-speed="-20">
          <img src="/img/Spr_PRLG_Forest_BG_Mountain.png" alt="">
      </div>
      <div id="rellax" class="${styles.tree1} ${styles.rellax}" data-rellax-speed="6">
          <img src="../img/Prop_Forest (78).png" alt="">
      </div>
      <!-- <div class="${styles.tree2} ${styles.rellax}" data-rellax-speed="4">
          <img src="Prop_Forest (79).png" alt="">
      </div> -->
      <div id="rellax" class="${styles.sakura}">
          <img src="Prop_Forest_sakura.png" alt="">
      </div>
      <div class="${styles.ground} ground">
          <img src="/img/ground.png" alt="">
      </div>
      <div id="rellax" class="${styles.cloud1} ${styles.rellax}" data-rellax-speed="10">
          <img src="/img/Spr_PRLG_Forest_BG_Cloud.png" alt="">
      </div>
      <div id="rellax" class="${styles.cloud3} ${styles.rellax}" data-rellax-speed="-50">
          <img src="/img/Spr_PRLG_Forest_BG_Cloud.png" alt="">
      </div>
  </div>
    `

    }
}
