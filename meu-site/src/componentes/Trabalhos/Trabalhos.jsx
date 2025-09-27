import "./Trabalhos.css"
import kaizen from '../../Images/kaizen.jpg'
import { gsap } from "gsap"
import { motion } from 'framer-motion'
import { useLayoutEffect } from "react"
import { ScrollTrigger } from "gsap/all"
import logo from "./../../Images/logo.png"
import logoFolgas from "./../../Images/logoBorbo.jpg"
import logoSite from "./../../Images/bmthicon.jpg"
import logoFuture1 from '../../Images/1porc.jpg'

function Trabalhos() {
    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(() => {

        gsap.to(".imgKaizen", {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".imgKaizen",
                start: " bottom 300px",
                end: "top 280px",
                scrub: true,
                // markers: true,
            }

        })
    })


    return (
        <section className="mainWorks">

            <div className="kaizen">
                <img className="imgKaizen" src={kaizen} alt="" />
                <p className="pKaizen">Kaizen 改善. 1% a cada dia para uma melhora continua.</p>
            </div>

            <div className="projetos">


                <h1 className="h1Works">Trabalhos</h1>
                <div className="works">
                    <div className="jiuJitsuAcademy">
                        <h2>Sistema de gestão para um Dojo de JiuJitsu</h2>
                        <motion.div
                            className="logoTeixeira"
                            whileHover={{
                                rotateX: 25,
                                rotateY: 360,
                                opacity: 1, transition: { duration: 1 },
                                scale: 1.09,
                                boxShadow: "0px 20px 40px rgba(240, 17, 17, 0.3)",
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        >

                            <img className="logoTeixeira" src={logo} alt="" />

                        </motion.div>

                        <p>Sistema web desenvolvido para otimizar o registro de alunos e o controle de pagamentos em academias. O projeto foi construído com React.js no front-end, Node.js no back-end e MongoDB como banco de dados. Criado sem fins lucrativos, com foco em prática de desenvolvimento e solução de problemas reais.
                        </p>

                        <a className="btnLinks" target="_blank" href="https://github.com/EduDsantos/Registration-System">Veja aqui!</a>
                    </div>


                    <div className="geradorFolgas">
                        <h2>Gerador de folgas</h2>
                        <motion.div
                            className="logoFolgas"
                            whileHover={{
                                rotateX: 25,
                                rotateY: 360,
                                opacity: 1, transition: { duration: 1 },
                                scale: 1.09,
                                boxShadow: "0px 20px 40px rgba(240, 17, 17, 0.3)",
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        >

                            <img className="logoFolgas" src={logoFolgas} alt="" />

                        </motion.div>


                        <p>Projetinho feito para o auxilio de supervisores da Autozone na criação de escala
                            de folgas mensais contento as 4 semanas do mês dividindo as folgas entre todos os funcionarios seguindo as regras da empresa. Feito com HTML, CSS e JAVASCRIPT puro. Fiz sem fins lucrativos.
                        </p>
                        <a className="btnLinks" target="_blank" href="https://github.com/EduDsantos/Day-off-Generator">Veja aqui!</a>
                    </div>


                    <div className="portfolio">
                        <h2>Portfólio</h2>
                        <motion.div
                            className="logoSite"
                            whileHover={{
                                rotateX: 25,
                                rotateY: 360,
                                opacity: 1, transition: { duration: 1 },
                                scale: 1.09,
                                boxShadow: "0px 20px 40px rgba(240, 17, 17, 0.3)",
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        >

                            <img className="logoSite" src={logoSite} alt="" />

                        </motion.div>
                        <p>Meu portfólio pessoal, feito com ReactJs e algumas animações com GSAP.</p>
                        <a className="btnLinks" target="_blank" href="">Veja aqui!</a>
                    </div>
                </div>




                <h1 className="h1Future">Projetos futuros</h1>
                <div className="futureWorks">
                    <div className="ecommerce">
                        <h2>E-commerce</h2>
                        <img className="logoFuture1" src={logoFuture1} alt="" />

                        <p>Fases de planejamentos para criar um E-commerce Ondemand para uma cliente.</p>
                    </div>
                    <div className="LojasRoupas">
                        <h2>Gestão de comercio</h2>
                        <img className="logoFuture1" src={logoFuture1} alt="" />
                        <p>Planejamento futuro para criação de um Sistema para
                            gerenciamento de pequenos negocios, totalmente personalizado de acordo com as
                            dificuldades dos clientes. A ideia é modernizar e facilitar todo o processo de compra e venda de lojas pequenas</p>
                    </div>
                </div>
            </div>

        </section>
    )



}

export default Trabalhos