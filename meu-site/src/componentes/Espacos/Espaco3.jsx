import imageEspaco3 from '../../Images/espaco3Img.png'

import "./Espaco3.css"

function Espaco3() {
    return (

        <div className="espaco3">
            <div className="conteudo3">
                <img className='nuvem1' src={imageEspaco3} alt="" />
                <p>Desenvolvido por Eduardo dos Santos</p>
                <img className='nuvem2' src={imageEspaco3} alt="" />
            </div>
        </div>
    )
}

export default Espaco3