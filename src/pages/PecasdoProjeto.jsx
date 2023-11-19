import styles from "../styles/PecasdoProjeto.module.css";
// import { Link } from "react-router-dom"
import Header from "../components/Header"
// import Logo from "../imgs/iconepyrobot.png"

import buzzer from "../imgs/buzzer.jpg"
import modulomq2 from "../imgs/modulomq2.jpg"
import led from "../imgs/led.jpg"
import jumper_macho_femea from "../imgs/jumper-macho-femea.jpg"
import protoboard from "../imgs/protoboard.jpg"
// import jumperf from "../imgs/jumperf.jpg"
import arduino from "../imgs/arduino.jpg"
import resistor from "../imgs/resistor.jpg"
import _20cmmxm_3 from "../imgs/20cmmxm_3.jpg"
import botao from "../imgs/botao.jpg"
// import modulomp3 from "../imgs/modulomp3.jpg"
// import altomegafodase from "../imgs/altomegafodase.jpg"
import modulobluetooth from "../imgs/ModuloBluetooth.jpg"









function PecasdoProjeto() {
  return (
    <div>
      <Header/>
      <div className={styles.desktop}>
        <div className={styles.index}>
          <div className={styles.titulo}><h1>Peças do projeto</h1></div>

          <div className={styles.grade}>

            <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/buzzer-12mm-24v-1544" rel="noopener">
                <img src={buzzer} alt="Buzzer" className={styles.imagem_componente} />
                <h4><b>Buzzer </b>R$3,60</h4>
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/modulo-sensor-de-gas-mq-2-7975" >
                <img src={modulomq2} alt="Módulo MQ-2" className={styles.imagem_componente} />
                <h4><b>Módulo MQ-2 </b>R$23,90</h4>
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/kit-jumper-macho-x-macho-10cm-20-peas-16954" >
                <img src={_20cmmxm_3} alt="Jumpers" className={styles.imagem_componente} />
                <h4><b>Jumpers </b>R$10,80</h4>
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/led-5mm-vermelho-difuso-287" >
                <img src={led} alt="Led" className={styles.imagem_componente} />
                <h4><b>LED </b>R$0,50</h4>
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/kit-jumper-macho-x-femea-30cm-20-pecas-13484" >
                <img  src={jumper_macho_femea} alt="Jumper macho femea" className={styles.imagem_componente} />
                <h4><b>Jumpers </b>R$15,80</h4>
              </a>
            </div>

            {/* <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/kit-jumper-femea-x-femea-20cm-20-pecas-15648" > 
                <img src={jumperf} alt="Jumpers" className={styles.imagem_componente} />
                <h4><b>Jumpers</b>R$13,80</h4>
              </a>
            </div> */}

            <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/protoboard-830-pontos-7978" >
                <img src={protoboard} alt="Protoboard" className={styles.imagem_componente} />
                <h4><b>Protoboard </b>R$29,80</h4>
              </a>
            </div>

            {/* <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/modulo-mp3-dfplayer-mini-10741" >
                <img src={modulomp3} alt="DFplayer mini" className={styles.imagem_componente} />
                <h4><b>DFplayer mini</b></h4>
              </a>
            </div> */}
            
            {/* <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/alto-falante-8r-05w-2-yd50-19154" >
                <img src={altomegafodase} alt="Auto falante" className={styles.imagem_componente} />
                <h4><b>Auto falante</b></h4>
              </a>
            </div> */}

            <div className={styles.card}>
            <a href="https://www.mamuteeletronica.com.br/placa-compativel-arduino-uno-r3-com-cabo-usb-atmega328p-pu-12383" >
                <img src={arduino} alt="Arduino" className={styles.imagem_componente} />
                <h4><b>Arduino </b>R$126,80</h4>
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/resistor-filme-metalico-270k-pr02-2w-5-21398" >
                <img  src={resistor} alt="Resistor" className={styles.imagem_componente} />
                <h4><b>Resistor </b>R$0,80</h4>
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://www.mamuteeletronica.com.br/modulo-botao-chave-tactil-12x12-com-capa-13627" >
                <img src={botao} alt="Módulo botão" className={styles.imagem_componente} />
                <h4><b>Módulo botão </b>R$7,80</h4>
              </a>
            </div>

            <div className={styles.card}>
              <a href="">
                <img src={modulobluetooth} alt="Módulo Bluetooth HC-05" className={styles.imagem_componente} />
                <h4><b>Módulo Bluetooth <br /> HC-05</b>R$54,90</h4>
              </a>
            </div>

          </div>

          <div className={styles.card_preco}>
            <p> Total: R$274,70</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PecasdoProjeto;
