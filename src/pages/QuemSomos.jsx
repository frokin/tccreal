import styles from "../styles/QuemSomos.module.css";
// import { Link } from "react-router-dom"
// import Logo from "../imgs/iconepyrobot.png"
import {  InstagramLogo } from "@phosphor-icons/react"
// import iconeinsta from "../imgs/iconeinsta.png"
import sofia from "../imgs/sofia.jpeg"
import iza from "../imgs/iza.jpeg"
import andre from "../imgs/andre.jpeg"
import Header from "../components/Header"

function QuemSomos () {
  return (
      <div>
        <Header />
        <div className={styles.desktop}>
        <div className={styles.index}>
        <div className={styles.div}>

          <div className={styles.overlap_group}>
            <div className={styles.text_wrapper_2}>Quem somos?</div>
            <div className={styles.imgsdenois}>
            <div className={styles.card_criadores}>
            <a href="https://www.instagram.com/soso.scss/"rel="noopener" >
              <img className={styles.sofia} alt="Sofia" src={sofia} />
              <div className={styles.containers}>
                <button><InstagramLogo className={styles.botao} size={32} /></button>    
                <h4><b>Sofia Soares</b></h4>
              </div>
            </a>
            </div>
              

            <div className={styles.card_criadores}>
            <a href="https://www.instagram.com/andre.ngb/"rel="noopener" >
              <img className={styles.andre} alt="André" src={andre} />
              <div className={styles.containers}>
                <button><InstagramLogo className={styles.botao} size={32} /></button>
                <h4><b>André Nicolas</b></h4>
              </div>
            </a>
            </div>
              

            <div className={styles.card_criadores}>
            <a href="https://www.instagram.com/izabela.luz.a_/"rel="noopener" >
              <img className={styles.iza} alt="Izabela" src={iza} />
              <div className={styles.containers}>
                <button><InstagramLogo className={styles.botao} size={32} /></button>  
                <h4><b>Izabela Cristina</b></h4>
              </div>
            </a>
            </div>
            </div>
          </div>

        </div>
        </div>
        </div>
        </div>

  );
}

export default QuemSomos;