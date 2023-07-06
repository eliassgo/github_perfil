// Primeiro: importacao
// OnBlur: Evento que ocorre quando o campo de entrada perde o foco. Quando o campo perde o foco é acionado a função de mudar o NomeUsuario para o valor que está no input 
import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
      <div className="formulario">
        <h1>Perfil GitHub: Busque seus repositórios</h1>
        <form action="">
          <label htmlFor="usuario">Usuário</label>
          <input type="text" id="usuario" onBlur={(e) => setNomeUsuario(e.target.value)} />
        </form>
      </div>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
