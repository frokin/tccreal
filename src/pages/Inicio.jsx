import styles from "../styles/Inicio.module.css"
// import { Link } from "react-router-dom"
// import garotodeprograma from "../imgs/garotodeprograma.png"
// import Logo from "../imgs/iconepyrobot.png"
import Header from "../components/Header"
import tcc from "../imgs/tcc.jpeg"
function Inicio() {
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
        <div className={styles.overlap}>
          <div className={styles.text_wrapper_2}> 
              <p>Com PyroBot</p> 
               <p>Você terá a tranquilidade de contar com um sistema confiável, eficiente e inteligente de detecção de
               incêndios.</p> 
              <p>Escolha a inovação, escolha PyroBot!</p>   
          </div>
          <div className={styles.card_img}>
            <img className={styles.tcc} src={tcc} alt="tcc" /> 
          </div>
          {/* <div className={styles.overlap_group}> */}
            {/* <p className={styles.p}>
                          
            </p> */}
            {/* <img
              className={styles.garotodeprograma}
              alt="Garotodeprograma"
              src={garotodeprograma}
            /> */}
          {/* </div> */}
          {/* <p className={styles.text_wrapper_3}>Escolha a inovação, escolha PyroBot!</p> */}
        </div>
      </div>
    </div>
    </div>

    <div className={styles.mobile}  /*mobileM375*/ >
      
    <div className={styles.inicio}>
      <div className={styles.div}> 
        <div className={styles.overlap}>
          <div className={styles.text_wrapper_2}>
           <p>Com PyroBot</p> 
           <p>Escolha a inovação, escolha PyroBot!</p>
           <p>Você terá a tranquilidade de contar com um sistema confiável, eficiente e inteligente de detecção de
            incêndios.</p>

            <img className={styles.tcc} src={tcc} alt="tcc" />
          </div>
          {/* <div className={styles.overlap_group}> */}
            {/* <p className={styles.p}>Escolha a inovação, escolha PyroBot!</p> */}
           
          {/* </div> */}
          {/* <p className={styles.text_wrapper_3}>
            Você terá a tranquilidade de contar com um sistema confiável, eficiente e inteligente de detecção de
            incêndios.
          </p> */}
        </div>
        {/* <Link to={"/Inicio"}>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />
        </Link> */}
        {/* <div className={styles.overlap_group_2}>
          <div className={styles.div_wrapper}>
            <div className={styles.text_wrapper_4}>
              <Link to={"/PyroBot"}>PyroBot</Link>
            </div>
          </div>

          <div className={styles.overlap_2}>
            <div className={styles.text_wrapper_5}>
              <Link to={"/Motivos"}>Motivos</Link> 
            </div>
          </div>

          <div className={styles.overlap_3}>
            <div className={styles.text_wrapper_6}>
              <Link to={"/Resultados"}>Resultados</Link>
            </div>
          </div>

          <div className={styles.overlap_4}>
            <div className={styles.rectangle} />
            <div className={styles.quem_somos}>
              <Link to={"/QuemSomos"}>Quem somos</Link>
            </div>
          </div>
          
          <div className={styles.overlap_5}>
            <div className={styles.text_wrapper_7}>
              <Link to={"/PecasdoProjeto"}>Peças do Projeto</Link>
            </div>
          </div>
        </div>  */}
      </div>
    </div>
    </div>

    

    
    </div>
    
  ) 
}

export default Inicio