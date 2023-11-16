import styles from "../styles/Resultados.module.css";
// import { Link } from "react-router-dom"
// import Logo from "../imgs/iconepyrobot.png"
import img1 from "../imgs/img1.jpeg"
import img2 from "../imgs/img2.jpeg"
import imgdnv from "../imgs/imgdnv.jpeg"
import imgcaixapintada from "../imgs/imgcaixapintada.jpeg"
import Header from "../components/Header"
function Resultados() {
  return (
      <div>
        <Header />
        <div className={styles.desktop}>
        <div className={styles.index}>
      <div className={styles.div}>
        {/* <div className={styles.text_wrapper}>PyroBot</div>
        <Link to={"/Inicio"}>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />
        </Link> */}
        <div className={styles.overlap_group}>
          <div className={styles.text_wrapper_2}>Processos/Resultados</div>

          <div className={styles.card_img}>

            <img
              className={styles.img}
              alt="Img"
              src={img1}
            />

            <img
              className={styles.img}
              alt="Img"
              src={img2}
            />

            <img
              className={styles.img}
              alt="Imgdnv"
              src={imgdnv}
            />

            <img
              className={styles.img}
              alt="Imgcaixapintada"
              src={imgcaixapintada}
            />

          </div>

          <div className={styles.overlap}>
            <div className={styles.text_wrapper_3}>
            <a className={styles.videosa} href="https://youtube.com/playlist?list=PLifxod0m063XOvn2tOzvF_68ntRfC3MJE&si=5przoqEyRE-Cy_VY" >Vídeos</a>
            </div>
          </div>

        </div>
      </div>
    </div>   
        </div>
        <div className={styles.mobile}>
        <div className={styles.index}>
      <div className={styles.div}>
        {/* <div className={styles.text_wrapper}>PyroBot</div>
        <Link to={"/Inicio"}>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />
        </Link> */}
        <div className={styles.overlap_group}>
          <div className={styles.text_wrapper_2}>Processos/Resultados</div>

          <div className={styles.card_img}>

            <img
              className={styles.img}
              alt="Img"
              src={img1}
            />

            <img
              className={styles.img}
              alt="Img"
              src={img2}
            />

            <img
              className={styles.img}
              alt="Imgdnv"
              src={imgdnv}
            />

            <img
              className={styles.img}
              alt="Imgcaixapintada"
              src={imgcaixapintada}
            />

          </div>

          <div className={styles.overlap}>
            <div className={styles.text_wrapper_3}>
            <a className={styles.videosa} href="https://youtube.com/playlist?list=PLifxod0m063XOvn2tOzvF_68ntRfC3MJE&si=5przoqEyRE-Cy_VY" >Vídeos</a>
            </div>
          </div>

        </div>
      </div>
    </div>   
        </div>
</div>

  )
}


export default Resultados;
