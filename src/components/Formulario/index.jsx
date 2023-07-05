import { useState, useEffect } from "react"

// Captar mudança automáticamente
const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    // Executar uma ação depois que a condicão for satisfeita. condição entre colchetes[]
    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("O componente finalizou")
        }
    }, []);
    useEffect(() => {
        console.log("O estado mudou")
    }, [nome]);

    useEffect(() => {
        console.log(`Materia ${materiaA} mudou`)
    }, [materiaA, materiaB, materiaC]);

    // Funçao para receber o nome
    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            // console.log(estadoAnterior);
            return evento.target.value;
        })
    }

    // Função para mostrar o resultado
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }
    return (
        <form>

            <ul>
                {["Elias", 'Ada', 'Alessandra', 'Olivia', 'Paulo', 'Cecília'].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario