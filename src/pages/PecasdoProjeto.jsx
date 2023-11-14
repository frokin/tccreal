import styles from "../styles/PecasdoProjeto.module.css";
// import { Link } from "react-router-dom"
import Header from "../components/Header"
// import Logo from "../imgs/iconepyrobot.png"

import buzzer from "../imgs/buzzer.jpg"
import modulomq2 from "../imgs/modulomq2.jpg"
import led from "../imgs/led.jpg"
import jumper_macho_femea from "../imgs/jumper-macho-femea.jpg"
import protoboard from "../imgs/protoboard.jpg"
import jumperf from "../imgs/jumperf.jpg"
import arduino from "../imgs/arduino.jpg"
import resistor from "../imgs/resistor.jpg"
import _20cmmxm_3 from "../imgs/20cmmxm_3.jpg"
import botao from "../imgs/botao.jpg"
import modulomp3 from "../imgs/modulomp3.jpg"
import altomegafodase from "../imgs/altomegafodase.jpg"
import modulobluetooth from "../imgs/ModuloBluetooth.jpg"









function PecasdoProjeto() {
  return (
    <div>
      <Header />
      <div className={styles.desktop}> 
      <div className={styles.index}>
      <div className={styles.pecasdo_projeto_wrapper}>
        <div className={styles.pecasdo_projeto}>
          {/* <div className={styles.text_wrapper}>PyroBot</div> */}
          {/* <Link to={"/Inicio"}>
        <img
            className={styles.icone_pyro_bot}
            alt="Icones de vetor de"
            src={Logo}
          />
        </Link> */}
          <div className={styles.overlap_group}>
            <div className={styles.div}>Peças do projeto</div>
            <div className={styles.overlap}>
              <div className={styles.text_wrapper_2}>Buzzer</div>
              <a href="https://www.mamuteeletronica.com.br/buzzer-12mm-24v-1544" rel="noopener">
        <img
            className={styles.buzzer}
            alt="buzzer"
            src={buzzer}
          />        
        </a>
            </div>
            <div className={styles.overlap_2}>
              <div className={styles.text_wrapper_3}>Módulo MQ-2</div>
              <a href="https://www.mamuteeletronica.com.br/modulo-sensor-de-gas-mq-2-7975" >
        <img
            className={styles.img}
            alt="modulomq2"
            src={modulomq2}
          />        
        </a>
            </div>
            <div className={styles.overlap_3}>
            <a href="https://www.mamuteeletronica.com.br/kit-jumper-macho-x-macho-10cm-20-peas-16954" >
        <img
            className={styles.img_2}
            alt="_20cmxm_3"
            src={_20cmmxm_3}
          />        
        </a>
              <div className={styles.text_wrapper_2}>Jumpers</div>
            </div>
            <div className={styles.overlap_4}>
              <div className={styles.text_wrapper_2}>LED</div>
              <a href="https://www.mamuteeletronica.com.br/led-5mm-vermelho-difuso-287" >
        <img
            className={styles.img_2}
            alt="led"
            src={led}
          />        
        </a>
            </div>
            <div className={styles.overlap_5}>
              <div className={styles.text_wrapper_2}>Jumpers</div>
              <a href="https://www.mamuteeletronica.com.br/kit-jumper-macho-x-femea-30cm-20-pecas-13484" >
        <img
            className={styles.img}
            alt="jumper_macho_femea"
            src={jumper_macho_femea}
          />        
        </a>
            </div>
            <div className={styles.overlap_6}>
              <div className={styles.text_wrapper_2}>Jumpers</div>
              <a href="https://www.mamuteeletronica.com.br/kit-jumper-femea-x-femea-20cm-20-pecas-15648" >
        <img
            className={styles.jumperf}
            alt="jumperf"
            src={jumperf}
          />        
        </a>
            </div>
            <div className={styles.overlap_7}>
              <div className={styles.text_wrapper_2}>Protoboard</div>
              <a href="https://www.mamuteeletronica.com.br/protoboard-830-pontos-7978" >
        <img
            className={styles.protoboard}
            alt="protoboard"
            src={protoboard}
          />        
        </a>
            </div>
            <div className={styles.overlap_8}>
              <div className={styles.text_wrapper_4}>DFplayer mini</div>
              <a href="https://www.mamuteeletronica.com.br/modulo-mp3-dfplayer-mini-10741" >
        <img
            className={styles.modulomp}
            alt="modulomp3"
            src={modulomp3}
          />        
        </a>
            </div>
            <div className={styles.overlap_9}>
              <div className={styles.text_wrapper_2}>Auto falante</div>
              <a href="https://www.mamuteeletronica.com.br/alto-falante-8r-05w-2-yd50-19154" >
        <img
            className={styles.altomegafodase}
            alt="altomegafodase"
            src={altomegafodase}
          />        
        </a>
            </div>
            <div className={styles.overlap_10}>
              <div className={styles.text_wrapper_2}>Arduino</div>
              <a href="https://www.mamuteeletronica.com.br/placa-compativel-arduino-uno-r3-com-cabo-usb-atmega328p-pu-12383" >
        <img
            className={styles.img_2}
            alt="arduino"
            src={arduino}
          />        
        </a>
            </div>
            <div className={styles.overlap_11}>
              <div className={styles.text_wrapper_2}>Resistor</div>
              <a href="https://www.mamuteeletronica.com.br/resistor-filme-metalico-270k-pr02-2w-5-21398" >
        <img
            className={styles.resistor}
            alt="resistor"
            src={resistor}
          />        
        </a>
            </div>
            <div className={styles.overlap_12}>
              <div className={styles.text_wrapper_5}>Módulo botão</div>
              <a href="https://www.mamuteeletronica.com.br/modulo-botao-chave-tactil-12x12-com-capa-13627" >
        <img
            className={styles.botao}
            alt="botao"
            src={botao}
          />        
        </a>
            </div>
            <div className={styles.overlap_13}>
              <div className={styles.text_wrapper_6}>Módulo Bluetooth <br /> HC-05</div>
              <a href="https://www.mamuteeletronica.com.br/modulo-bluetooth-hc-05-13161" >
        <img
            className={styles.img_4}
            alt="Modulobluetooth"
            src={modulobluetooth}
          />        
        </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>

      <div className={styles.mobile}  /*mobileM375*/ >
      <div className={styles.index}>
      <div className={styles.pecasdo_projeto_wrapper}>
        <div className={styles.pecasdo_projeto}>
          {/* <div className={styles.text_wrapper}>PyroBot</div> */}
          <div className={styles.overlap_group}>
            <div className={styles.div}>Peças do projeto</div>
            <div className={styles.overlap}>
              <div className={styles.text_wrapper_2}>Buzzer</div>
              <a href="https://www.mamuteeletronica.com.br/buzzer-12mm-24v-1544" rel="noopener">
        <img
            className={styles.buzzer}
            alt="buzzer"
            src={buzzer}
          />        
        </a>
            </div>
            <div className={styles.overlap_2}>
              <div className={styles.text_wrapper_3}>Módulo MQ-2</div>
              <a href="https://www.mamuteeletronica.com.br/modulo-sensor-de-gas-mq-2-7975" rel="noopener">
        <img
            className={styles.img}
            alt="modulomq2"
            src={modulomq2}
          />        
        </a>
            </div>
            <div className={styles.overlap_3}>
            <a href="https://www.mamuteeletronica.com.br/kit-jumper-macho-x-macho-10cm-20-peas-16954" rel="noopener">
        <img
            className={styles.img_2}
            alt="_20cmxm_3"
            src={_20cmmxm_3}
          />        
        </a>
              <div className={styles.text_wrapper_4}>Jumpers</div>
            </div>
            <div className={styles.overlap_4}>
              <div className={styles.text_wrapper_5}>LED</div>
              <a href="https://www.mamuteeletronica.com.br/led-5mm-vermelho-difuso-287" >
        <img
            className={styles.img_2}
            alt="led"
            src={led}
          />        
        </a>
            </div>
            <div className={styles.overlap_5}>
              <div className={styles.text_wrapper_6}>Jumpers</div>
              <a href="https://www.mamuteeletronica.com.br/kit-jumper-macho-x-femea-30cm-20-pecas-13484" >
        <img
            className={styles.img}
            alt="jumper_macho_femea"
            src={jumper_macho_femea}
          />        
        </a>
            </div>
            <div className={styles.overlap_6}>
              <div className={styles.text_wrapper_6}>Jumpers</div>
              <a href="https://www.mamuteeletronica.com.br/kit-jumper-femea-x-femea-20cm-20-pecas-15648" >
        <img
            className={styles.jumperf}
            alt="jumperf"
            src={jumperf}
          />        
        </a>
            </div>
            <div className={styles.overlap_7}>
              <div className={styles.text_wrapper_7}>Protoboard</div>
              <a href="https://www.mamuteeletronica.com.br/protoboard-830-pontos-7978" >
        <img
            className={styles.protoboard}
            alt="protoboard"
            src={protoboard}
          />        
        </a>
            </div>
            <div className={styles.overlap_8}>
              <div className={styles.text_wrapper_8}>DFplayer mini</div>
              <a href="https://www.mamuteeletronica.com.br/modulo-mp3-dfplayer-mini-10741" >
        <img
            className={styles.modulomp}
            alt="modulomp3"
            src={modulomp3}
          />        
        </a>
            </div>
            <div className={styles.overlap_9}>
              <div className={styles.text_wrapper_9}>Auto falante</div>
              <a href="https://www.mamuteeletronica.com.br/alto-falante-8r-05w-2-yd50-19154" >
        <img
            className={styles.altomegafodase}
            alt="altomegafodase"
            src={altomegafodase}
          />        
        </a>
            </div>
            <div className={styles.overlap_10}>
              <div className={styles.text_wrapper_5}>Arduino</div>
              <a href="https://www.mamuteeletronica.com.br/placa-compativel-arduino-uno-r3-com-cabo-usb-atmega328p-pu-12383" >
        <img
            className={styles.img_2}
            alt="arduino"
            src={arduino}
          />        
        </a>
            </div>
            <div className={styles.overlap_11}>
              <div className={styles.text_wrapper_10}>Resistor</div>
              <a href="https://www.mamuteeletronica.com.br/resistor-filme-metalico-270k-pr02-2w-5-21398" >
        <img
            className={styles.resistor}
            alt="resistor"
            src={resistor}
          />        
        </a>
            </div>
            <div className={styles.overlap_12}>
              <div className={styles.text_wrapper_11}>Módulo botão</div>
              <a href="https://www.mamuteeletronica.com.br/modulo-botao-chave-tactil-12x12-com-capa-13627" >
        <img
            className={styles.botao}
            alt="botao"
            src={botao}
          />        
        </a>
            </div>
            <div className={styles.overlap_13}>
              <div className={styles.text_wrapper_12}>Md. Bluetooth <br /> HC-05</div>
              <a href="https://www.mamuteeletronica.com.br/modulo-bluetooth-hc-05-13161" >
        <img
            className={styles.modulobluetooth}
            alt="Modulobluetooth"
            src={modulobluetooth}
          />        
        </a>
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

      

    </div>    
  );
}

export default PecasdoProjeto;
