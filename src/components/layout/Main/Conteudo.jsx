import { useState, useEffect } from 'react'
import { GoLocation } from 'react-icons/go'
import { IoChevronForwardOutline, IoHeartDislikeOutline } from 'react-icons/io5'
import Styles from './Conteudo.module.css'
import Conteudo2 from './Conteudo2'

export default function Conteudo() {

    const [input, setInput] = useState([])
    const [values, setValues] = useState()

    useEffect(async () => {

        const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${values}`)
    
        const data = await response.json()
    
        setInput(data)

    }, [values]); 
    
    return(
        <div className={Styles.geral}>
                <h1>Dados Coronavírus (COVID-19) atualizados</h1>
            {/*CONTAINER*/}
            <div className={Styles.container}>
                <div>
                    <div>
                        {/*BOX*/}
                        <div className={Styles.box}>
                            <h3>Digite sua UF</h3>
                            <input 
                                type="text"
                                onChange={(e) => setValues(e.target.value)} 
                                maxLength="2"
                                placeholder='UF'
                            />
                        <Conteudo2 />
                        </div>
                    </div>
                </div>
        
                {

                <div className={Styles.dados}>

                        <div className={Styles.estados}>
                            <h2><GoLocation size={18} />{input.state}</h2>
                            <p>{input.uf}</p>
                        </div>

                        <div className={Styles.casos}>
                            <h3><IoChevronForwardOutline /> Casos confirmados</h3>
                            <p>{input.cases}</p>
                            <h3><IoChevronForwardOutline />Suspeitas (24hrs)</h3>
                            <p>{input.suspects}</p>
                        </div>

                        <div className={Styles.mortes}>
                            <h3><IoHeartDislikeOutline size={19} />Óbitos</h3>
                            <p>{input.deaths}</p>
                        </div>
                        
                </div>
                }
            </div>
        </div>
    )
}
