import "./Infos.css"
import { useLayoutEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import ImagesInfo from '../../Images/estatuaImg.jpg'
import profilePic from '../../Images/profilePic3.jpeg'
import backPic from '../../Images/backPic.jpg'


function Infos() {

    const [showModal, setShowModal] = useState(false)
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".h2Infos", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".h2Infos",
                start: " bottom 200px",
                end: "bottom 180px",
                // markers: true,
                scrub: true,
            }

        })
    })
    return (

        <section className="infos">

            <h2 className="h2Infos">Sobre Mim</h2>
            <p className="pInfos">Meu nome é Eduardo do Santos,
                tenho 22 anos, moro no interior de São Paulo e sou desenvolvedor front-end.
                estou sempre em busca de aprender novas habilidades e conhecimentos, tanto de cursos online
                ou presencial, quanto de estudos autodidata. Estou sempre buscando aprimorar meus conhecimentos na área de desenvolvimento web.

                <button className="btnLinks" onClick={() => setShowModal(true)}>Ver mais</button>
            </p>
            <img className="imgInfo" src={ImagesInfo} alt="Image Infos" />

            {showModal && (
                <div className="modal">
                    <div className="modalContent">
                        <h1>VENI. VIDI. VICI</h1>
                        <div className="foto-container">
                            <img className="foto profilePic" src={profilePic} alt="minha foto" />
                            <img className="foto picHidden" src={backPic} alt="minha foto" />
                        </div>
                        <h2>Eduardo dos Santos</h2>
                        <h2>22 Anos</h2>
                        <p className="p-Modal">Atualmente sou formado como Técnico em Analise e Desenvolvimento de Sistermas.
                            Alem da formação tecnica, estudo por conta há 3 anos e a cada dia que passa busco me aperfeiçoar ainda mais. Sempre gostei de Arte no geral, e acredito que criar sitemas e sites seja um meio de arte moderna.
                            Meu objetivo é ajudar pessoas utilizando programação. </p>
                        <p className="p-comp">Experiencia em React, NodeJs, e mongoDb</p>
                        <div className="sociais">
                            {/* <a href="" className="btnSociais"><i class="icons bi bi-instagram"></i></a> */}
                            <a href="https://www.linkedin.com/in/eduardo-dsantos/" target="_blank" className="btnSociais"><i class="icons bi bi-linkedin"></i></a>
                            <a href="https://github.com/EduDsantos" target="_blank" className="btnSociais"><i class="icons bi bi-github"></i></a>
                        </div>



                        <button onClick={() => setShowModal(false)}>Fechar</button>

                    </div>


                </div>
            )}

        </section>

    )

}

export default Infos