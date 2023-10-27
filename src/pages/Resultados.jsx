import styles from "../styles/Resultados.module.css";
import { Link } from "react-router-dom"
import Logo from "../imgs/iconepyrobot.png"
import img1 from "../imgs/img1.jpeg"
import img2 from "../imgs/img2.jpeg"
import imgdnv from "../imgs/imgdnv.jpeg"
import imgcaixapintada from "../imgs/imgcaixapintada.jpeg"

function Resultados() {
  return (
      <div>
        <div className={styles.desktop}>
        <div className={styles.index}>
      <div className={styles.div}>
        <div className={styles.text_wrapper}>PyroBot</div>
        <Link to={"/Inicio"}>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />
        </Link>
        <div className={styles.overlap_group}>
          <div className={styles.text_wrapper_2}>Processos/Resultados</div>
          <img
            className={styles.img}
            alt="Img"
            src={img1}
          />
          <img
            className={styles.img_2}
            alt="Img"
            src={img2}
          />
          <img
            className={styles.imgdnv}
            alt="Imgdnv"
            src={imgdnv}
          />
          <img
            className={styles.imgcaixapintada}
            alt="Imgcaixapintada"
            src={imgcaixapintada}
          />
          <div className={styles.overlap}>
            <div className={styles.text_wrapper_3}>
            <a href="https://youtube.com/playlist?list=PLifxod0m063XOvn2tOzvF_68ntRfC3MJE&si=5przoqEyRE-Cy_VY" >Vídeos       
        </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        </div>

        <div className={styles.mobile}>
        <div className={styles.index}>
      <div className={styles.div}>
        <div className={styles.text_wrapper}>PyroBot</div>
        <div className={styles.overlap_group}>
          <div className={styles.text_wrapper_2}>Processos/Resultados</div>
          <img
            className={styles.img}
            alt="Img"
            src={img1}
          />
          <img
            className={styles.img_2}
            alt="Img"
            src={img2}
          />
          <img
            className={styles.imgdnv}
            alt="Imgdnv"
            src={imgdnv}
          />
          <img
            className={styles.imgcaixapintada}
            alt="Imgcaixapintada"
            src={imgcaixapintada}
          />
          <div className={styles.overlap}>
            <div className={styles.text_wrapper_3}>
            <a href="https://youtube.com/playlist?list=PLifxod0m063XOvn2tOzvF_68ntRfC3MJE&si=5przoqEyRE-Cy_VY" >Vídeos       
        </a>
            </div>
          </div>
        </div>
        <Link to={"/Inicio"}>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />
        </Link>
      </div>
    </div>
      </div>
      </div>

  )
}


export default Resultados;
