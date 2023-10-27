import styles from "../styles/Inicio.module.css"
import { Link } from "react-router-dom"
import Logo from "../imgs/iconepyrobot.png"
import garotodeprograma from "../imgs/garotodeprograma.png"

function Inicio() {
  return (
    <div>

    <div className={styles.desktop}>
      <div className={styles.index}>
      <div className={styles.div}>
        <div className={styles.text_wrapper}>PyroBot</div>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />
        <div className={styles.overlap}>
          <div className={styles.text_wrapper_2}>Com PyroBot</div>
          <div className={styles.overlap_group}>
            <p className={styles.p}>
              Você terá a tranquilidade de contar com um sistema confiável, eficiente e inteligente de detecção de
              incêndios.
            </p>
            <img
              className={styles.garotodeprograma}
              alt="Garotodeprograma"
              src={garotodeprograma}
            />
          </div>
          <p className={styles.text_wrapper_3}>Escolha a inovação, escolha PyroBot!</p>
        </div>
        <div className={styles.overlap_group_2}>
          <div className={styles.div_wrapper}>
            <div className={styles.text_wrapper_4}>
            <a href="">
            <Link to={"/PyroBot"}>PyroBot</Link>
            </a>
          </div>
          </div>
          <div className={styles.overlap_2}>
            <div className={styles.text_wrapper_5}>
            <Link to={"/Resultados"}>Resultados</Link>
            </div>
          </div>
          <div className={styles.overlap_3}>
            <div className={styles.text_wrapper_6}>
            <Link to={"/Motivos"}>Motivos</Link>  
            </div>
          </div>
          <div className={styles.overlap_4}>
            <div className={styles.text_wrapper_7}>
            <Link to={"/PecasdoProjeto"}>Peças do Projeto</Link>
            </div>
          </div>
          <div className={styles.overlap_5}>
            <div className={styles.text_wrapper_8}>
              <Link to={"/QuemSomos"}>Quem somos</Link>
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
          <div className={styles.text_wrapper_2}>Com PyroBot</div>
          <div className={styles.overlap}>
            <p className={styles.p}>Escolha a inovação, escolha PyroBot!</p>
            <div className={styles.rectangle} />
            <div className={styles.rectangle_2}/>
            <div className={styles.rectangle_3}/>
            <div className={styles.rectangle_4}/>
            <div className={styles.rectangle_5}/>
            <div className={styles.rectangle_6}/>
            <div className={styles.text_wrapper_3}>
              <Link to={"/PyroBot"}>PyroBot</Link>
            </div>
            <div className={styles.quem_somos}>
              <Link to={"/QuemSomos"}>Quem somos</Link>
            </div>
            <div className={styles.text_wrapper_4}>
              <Link to={"/PecasdoProjeto"}>Peças do Projeto</Link>
            </div>
            <div className={styles.text_wrapper_5}>
              <Link to={"/Motivos"}>Motivos</Link> 
            </div>
            <div className={styles.text_wrapper_6}>
              <Link to={"/Resultados"}>Resultados</Link>
            </div>
            <p className={styles.text_wrapper_7}>
              Você terá a tranquilidade de contar com um sistema confiável, eficiente e inteligente de detecção de incêndios.
            </p>
            <img
              className={styles.garotodeprograma}
              alt="Garotodeprograma"
              src={garotodeprograma}
            />
          </div>
        </div>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />
      </div>
    </div>
    </div>

    </div>
    
  ) 
}

export default Inicio