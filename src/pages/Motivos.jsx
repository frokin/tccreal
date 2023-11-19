import styles from "../styles/Motivos.module.css";
// import { Link } from "react-router-dom"
import Header from "../components/Header"
// import Logo from "../imgs/iconepyrobot.png"
import iconezinmotivos1 from "../imgs/iconezinmotivos1.png"
import iconezinmotivos2 from "../imgs/iconezinmotivos2.png"
import iconezinmotivos3 from "../imgs/iconezinmotivos3.png"
// import programadoraxinaisa from "../imgs/programadoraxinaisa.png"

function Motivos() {
  return (
    <div>
      <Header />
      <div className={styles.desktop}>
      <div className={styles.index}>  
      <div className={styles.div}>
        <div className={styles.overlap}>
          {/* <div className={styles.text_wrapper}>PyroBot</div> */}
        </div>
        <div className={styles.logod}>
        {/* <Link to={"/Inicio"}>
        <img
            className={styles.icone_pyro_bot}
            alt="Icones de vetor de"
            src={Logo}
          />
        </Link> */}
        </div>
        <div className={styles.overlap_2}>
          <div className={styles.rectangle} />
          <div className={styles.p}><h1>Por que escolher o PyroBot?</h1></div>
          {/* <img
            className={styles.iconezinmotivos}
            alt="Iconezinmotivos"
            src={iconezinmotivos3}
          />
          <img
            className={styles.img_2}
            alt="Iconezinmotivos"
            src={iconezinmotivos2}
          />
          <img
            className={styles.img}
            alt="Iconezinmotivos"
            src={iconezinmotivos1}
          /> */}

          <div className={styles.conteudo}>
            <div className={styles.card}>
              <img
                className={styles.img}
                alt="Iconezinmotivos"
                src={iconezinmotivos3}
              />

              <p className={styles.texto_cards}>
                Confiabilidade garantida
                <br />
                Performance confiável 
                <br />
                Monitoramento contínuo
              </p>
            </div>

            <img
              className={styles.line}
              alt="Line"
              src="https://cdn.animaapp.com/projects/6521ab18d9cb42a4b3df616b/releases/6521ac5d62f75e9352093c3e/img/line-6.svg"
            />

            <div className={styles.card}>
              <img
                className={styles.img}
                alt="Iconezinmotivos"
                src={iconezinmotivos2}
              />

              <p className={styles.texto_cards}>
                Resposta rápida
                <br />
                Detecção precisa 24/7 
                <br />
                Alertas instantâneos
              </p>
            </div>

            <img
              className={styles.line}
              alt="Line"
              src="https://cdn.animaapp.com/projects/6521ab18d9cb42a4b3df616b/releases/6521ac5d62f75e9352093c3e/img/line-6.svg"
            />

            <div className={styles.card}>
              <img
                className={styles.img}
                alt="Iconezinmotivos"
                src={iconezinmotivos1}
              />

              <p className={styles.texto_cards}>
                Detecção precisa
                <br />
                Precisão incomparável 
                <br />
                Eficiência exemplar
              </p>
            </div>
          </div>


          {/* <div className={styles.rectangle_2}>
            <div className={styles.grid_1}>
              <img
                className={styles.programadoraxinaisa}
                alt="Programadoraxinaisa"
                src="https://cdn.animaapp.com/projects/6521ab18d9cb42a4b3df616b/releases/6521ac5d62f75e9352093c3e/img/programadoraxinaisa-1.png"
              />             
            </div>            

            <div className={styles.grid_2}>
              <div className={styles.text_wrapper_2}>PyroBot é simplesmente incrível!</div>
              <p className={styles.text_wrapper_3}>
                Sua tecnologia avançada de detecção de incêndios e resposta rápida garantem a máxima segurança.
              </p>
            </div>
          </div>             */}
          </div>
      </div>
    </div>
      </div>

      <div className={styles.rectangle_1}>
            <div className={styles.grid_1}>
              <img
                className={styles.programadoraxinaisa}
                alt="Programadoraxinaisa"
                src="https://cdn.animaapp.com/projects/6521ab18d9cb42a4b3df616b/releases/6521ac5d62f75e9352093c3e/img/programadoraxinaisa-1.png"
              />             
            </div>            

            <div className={styles.grid_2}>
              <div className={styles.text_wrapper_2}>PyroBot é simplesmente incrível!</div>
              <p className={styles.text_wrapper_3}>
                Sua tecnologia avançada de detecção de incêndios e resposta rápida garantem a máxima segurança.
              </p>
            </div>
      </div> 
{/* 
            <div className={styles.rectangle_2}>
            <div className={styles.grid_1}>
              <img
                className={styles.programadoraxinaisa}
                alt="Programadoraxinaisa"
                src="https://cdn.animaapp.com/projects/6521ab18d9cb42a4b3df616b/releases/6521ac5d62f75e9352093c3e/img/programadoraxinaisa-1.png"
              />             
            </div>            

            <div className={styles.grid_2}>
              <div className={styles.text_wrapper_2}>PyroBot é simplesmente incrível!</div>
              <p className={styles.text_wrapper_3}>
                Sua tecnologia avançada de detecção de incêndios e resposta rápida garantem a máxima segurança.
              </p>
            </div>
      </div>                   */}

    </div>
  );
}
  


export default Motivos;
