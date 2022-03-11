import Logo from '../../../assets/img/img1.png'
import Styles from './Conteudo2.module.css'

function Conteudo2() {
    return(
        <div>
            <img className={Styles.imagem} src={Logo} alt="Pandemia" />
        </div>
    )
}

export default Conteudo2;