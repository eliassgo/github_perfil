import { useEffect, useState } from "react"
import styles from './RespoList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState([]);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJon => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJon);
                }, 3000);
            })
    }, [nomeUsuario]); // Quando houver uma mudança no nome de usuário o useEffect vai executar e fazer a requisição

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
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