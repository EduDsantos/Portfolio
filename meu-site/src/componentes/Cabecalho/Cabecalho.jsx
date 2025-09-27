import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import cabeImage02 from '../../Images/cabe02.jpg'
import cabeImage01 from '../../Images/cabe01.jpg'

import './Cabecalho.css'

function Cabecalho() {


    useLayoutEffect(() => {
        gsap.to(".h1Cabecalho", {
            x: 0,
            opacity: 1,
            

        })

        return () => {
            gsap.killTweensOf(".h1Cabecalho")
        }
    }, [])

    return (
        <section className="cabecalho">
            <img className="cabeImage01" src={cabeImage01} alt="proifilepic" />
            <div className="textos">
                <h1 className="h1Cabecalho">Eduardo D.Santos</h1>
                <h2 className="h2Cabecalho">vulgo Gajas.</h2>
            </div>
            <img className="cabeImage02" src={cabeImage02} alt="proifilepic" />
        </section>

    )
}
export default Cabecalho