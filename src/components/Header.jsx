
import { List, X } from "@phosphor-icons/react"
import styles from "./Header.module.css"
import { useState } from "react"
import Logo from "../imgs/iconepyrobot.png"
import { Link } from "react-router-dom"




function Header(){

    const [abrirMenu, setAbrirMenu] = useState(false)

    function handleAbrirFecharMenu(){
        if(abrirMenu === true){
           setAbrirMenu(false)
        return 
        }
        setAbrirMenu(true)
    }

return(
	<header className={styles.header}>
    <div className={styles.mobile}>
    <div className={styles.menu_logo}>
        <button className={styles.botao_menu} onClick={handleAbrirFecharMenu}>
        {
            abrirMenu === true ? (
                <X size={32} />
            ):(
                <List size={32} />
            )
        }
        </button>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />    </div>
        <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
            <nav className="">
                <Link className={styles.menuzin} to={"/Inicio"}>Inicio</Link>
                <Link className={styles.menuzin} to={"/PyroBot"}>PyroBot</Link>
                <Link className={styles.menuzin} to={"/Motivos"}>Motivos</Link>
                <Link className={styles.menuzin} to={"/PecasdoProjeto"}>Peças do Projeto</Link>
                <Link className={styles.menuzin} to={"/QuemSomos"}>Quem Somos</Link>
                <Link className={styles.menuzin} to={"/Resultados"}>Resultados</Link>
            </nav>
        </div>
    </div>


    <div className={styles.desktop}>
        <div>
        <img
          className={styles.icone_pyro_bot}
          alt="Icone pyro bot"
          src={Logo}
        />
        </div>
        <div>
            <nav className={styles.desktop_options}>
            <Link className={styles.menuzin} to={"/Inicio"}>Inicio</Link>
                <Link className={styles.menuzin} to={"/PyroBot"}>PyroBot</Link>
                <Link className={styles.menuzin} to={"/Motivos"}>Motivos</Link>
                <Link className={styles.menuzin} to={"/PecasdoProjeto"}>Peças do Projeto</Link>
                <Link className={styles.menuzin} to={"/QuemSomos"}>Quem Somos</Link>
                <Link className={styles.menuzin} to={"/Resultados"}>Resultados</Link>
            </nav>
        </div>
        </div>

    </header>
)
}

export default Header;