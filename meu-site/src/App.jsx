import './App.css'
import React from 'react'
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import MainContent from './componentes/ConteudoPrincipal/MainContent'
import Infos from './componentes/Infos/Infos'
import Espacos from './componentes/Espacos/Espacos'
import Trabalhos from './componentes/Trabalhos/Trabalhos'
import Espaco2 from './componentes/Espacos/Espaco2'
import Espaco3 from './componentes/Espacos/Espaco3'

function App() {

  return (
    <>
      <Cabecalho />
      <Espaco2 />
      <Infos />
      <Espacos />
      <MainContent />
      <Espacos />
      <Trabalhos />
      <Espaco3 />



    </>
  )
}

export default App
