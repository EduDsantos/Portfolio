import { useLayoutEffect, useRef, useEffect } from "react"
import './MainContent.css'
import { motion } from 'framer-motion'
import ImageMain from '../../Images/icaro.png'
import jsIcon from '../../Images/jsIcon.png'
import reactIcon from '../../Images/reactIcon.png'
import mongoIcon from '../../Images/mongoIcon.png'
import nodeIcon from '../../Images/nodeIcon.png'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

function MainContent() {


    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(() => {
        gsap.to(".h1Tec", {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: ".h1Tec",
                start: " bottom 100px",
                end: "top 280px",
                scrub: true,
                // markers: true,
            }

        })

        gsap.to(".MainImg", {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".MainImg",
                start: "top 40%",   
                end: "top 10%",     
                scrub: 1,
                // markers: true,
            }
        });


    }, [])



    return (
        <main className="mainContent">
            <script src=""></script>
            <img className="MainImg" src={ImageMain} alt="" />

            <h1 className="h1Tec">Tecnologias</h1>

            <div className="tecContent">
                <motion.div
                    className="javaScriptCont"
                    whileHover={{
                        rotateX: 30,
                        rotateY: 5,
                        opacity: 1, transition: { duration: 1 },
                        scale: 1.04,
                        boxShadow: "0px 20px 40px rgba(240, 17, 17, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                    <span className="spanScript">JavaScript</span>
                    <img className="jsIcon" src={jsIcon} alt="" />

                </motion.div>

                <motion.div
                    className="reactCont"
                    whileHover={{
                        rotateX: 30,
                        rotateY: 5,
                        opacity: 1, transition: { duration: 1 },
                        scale: 1.04,
                        boxShadow: "0px 20px 40px rgba(240, 17, 17, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                    <span className="spanReact">React</span>
                    <img className="reactIcon" src={reactIcon} alt="" />
                </motion.div>


                <motion.div
                    className="nodeCont"
                    whileHover={{
                        rotateX: 30,
                        rotateY: 5,
                        opacity: 1, transition: { duration: 1 },
                        scale: 1.04,
                        boxShadow: "0px 20px 40px rgba(240, 17, 17, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                    <span className="spanNode">Node</span>
                    <img className="nodeIcon" src={nodeIcon} alt="" />

                </motion.div>

                <motion.div
                    className="mongoCont"
                    whileHover={{
                        rotateX: 30,
                        rotateY: 5,
                        opacity: 1, transition: { duration: 1 },
                        scale: 1.04,
                        boxShadow: "0px 20px 40px rgba(240, 17, 17, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                    <span className="spanMongo">MongoDb</span>
                    <img className="mongoIcon" src={mongoIcon} alt="" />
                </motion.div>




            </div>
        </main>
    )


}

export default MainContent