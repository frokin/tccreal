import styles from "../styles/PyroBot.module.css";
// import { Link } from "react-router-dom"
// import Logo from "../imgs/iconepyrobot.png"
import pyrobotcaixa from "../imgs/pyrobotcaixa.jpeg"
import Header from "../components/Header"

/*export const Index = () => {*/
function PyroBot() {
  return (
    <div>
      <Header />
      <div className={styles.desktop}>
    <div className={styles.index}>
      <div className={styles.div}>
        {/* <div className={styles.overlap}>
          <div className={styles.text_wrapper}>PyroBot</div>
        </div>
        <div className={styles.overlap_group}>
        <Link to={"/Inicio"}>
        <img
            className={styles.icones_de_vetor_de}
            alt="Icones de vetor de"
            src={Logo}
          />
        </Link>
        </div> */}
        <div className={styles.overlap_2}>
          <div>
          <div className={styles.div_wrapper}>
            <p className={styles.p}>
              PyroBot detecta com precisão e rapidez a presença de chamas ou fumaça, acionando alarmes e alertando as
              pessoas para evacuar o local de maneira segura.
            </p>
          </div>
          <div className={styles.overlap_3}>
            <p className={styles.text_wrapper_2}>
              Com sua combinação única de algoritmos, PyroBot é capaz de identificar sinais de fogo em tempo real. Seja
              em residências, escritórios ou ambientes industriais.
            </p>
          </div>
          </div>
          <div className={styles.image_wrapper}>
            <img
              className={styles.image}
              alt="Image"
              src={pyrobotcaixa}
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.mobile} /*mobileM375*/  >
  <div className={styles.pyro_bot}>
      <div className={styles.div}>
        {/* <div className={styles.text_wrapper}>PyroBot</div> */}
        <div className={styles.overlap_group}>

          <div className={styles.overlap_2}>
            <p className={styles.text_wrapper_2}>
              PyroBot detecta com precisão e rapidez a presença de chamas ou fumaça, acionando alarmes e alertando as
              pessoas para evacuar o local de maneira segura.
            </p>
          </div>
          
          <div className={styles.overlap}>
            <img className={styles.image} alt="Image" src={pyrobotcaixa} />
          </div>

          <div className={styles.div_wrapper}>
            <p className={styles.p}>
              Com sua combinação única de algoritmos, PyroBot é capaz de identificar sinais de fogo em tempo real. Seja
              em residências, escritórios ou ambientes industriais.
            </p>
          </div>

        </div>
         {/* <Link to={"/Inicio"}>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />
        </Link> */}
      </div>
    </div>
  </div>

  

  </div>
  );
}  


export default PyroBot;