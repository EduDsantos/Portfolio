import { useLayoutEffect, useRef, Suspense } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text3D, Environment, Stars } from "@react-three/drei"
import ImageProfile from '../../Images/fundo.jpg'

import './Cabecalho.css'

export default function App() {
  return (
    <div style={{ width: "95vw", height: "100vh",margin: "auto" , background: "#0a0a0a" }}>
      <Canvas camera={{ position: [-10, 1, 8] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={5} />

        <Suspense fallback={null}>
          {/* Texto 3D */}
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json" // coloca em public/fonts
            size={1}
            height={0.3}
            bevelEnabled
            bevelSize={0.02}
            bevelSegments={5}
          >
            S Y N Y S T E R 
            <meshStandardMaterial color="#7f5af0" metalness={0.8} roughness={0.3} />
          </Text3D>

          {/* Ambiente futurista */}
          <Environment preset="night" />

          {/* Fundo com estrelas */}
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}