import { useEffect, useState } from "react"
import styles from './RespoList.module.css'
/* 
useState: hook que permite adicionar estado a um componente funcional. 
Consiste em um par de valores, uma variável de estado e uma função para atualizar o estado. 
useState permite adicionar estado a um componente funcional
useEffect permite executar efeitos colaterais em momentos específicos do ciclo de vida do componente
set... são usadas para atualizar o estado de um componente, refletindo essas alterações na renderização.
*/
const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]); // Estado repos que como um array vazio para armazenar os repositório obtidos
    const [estaCarregando, setEstaCarregando] = useState([false]); // 
    const [deuErro, setDeuErro] = useState(false)
    useEffect(() => { // hook que é executado sempre que há uma alteração no valor nomeUsuario
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`) // Chamada à APi para obter os repos
            .then(res => res.json()) // Convertendo a resposta em json 
            .then(resJon => {
                setTimeout(() => { // Definição do timeout para simular um atraso no carregamento 
                    setEstaCarregando(false); // Indicando que o carregamento foi concluído 
                    setRepos(resJon); // Atualizando a const repos com os dados obtidos 
                }, 3000);
            })
            .catch(e => {
                setDeuErro(true)
                setEstaCarregando(false);
            })
    }, [nomeUsuario]); // Quando houver uma mudança no nome de usuário o useEffect vai executar e fazer a requisição

    return (
        <div className="container">
            {deuErro ? (
                <h1>Usuário não encontrado. Verifique o seu nome de usuário</h1>
            ) : estaCarregando ? ( // Verificação se estaCarregando é verdadeira, se sim mostra o carregando.. 
                <h1>Buscando os dados...</h1>
            ) : (
                <u className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li key={id} className={styles.listItem}>
                            <div className={styles.itemName}>
                                <b >Nome: </b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b>
                                {language}
                            </div>

                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </u>
            )}
        </div>
    )
}


export default ReposList