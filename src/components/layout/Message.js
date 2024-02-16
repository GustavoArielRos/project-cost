import { useState, useEffect } from "react"

import styles from "./Message.module.css"

function Message({type,msg}) {

    // Aqui estamos importando uma função chamada "useState" do React,
    // que permite a criação de variáveis de estado no nosso componente.
    const [visible, setVisible] = useState(false);

    // Em seguida, estamos utilizando o hook "useEffect". Esse hook
    // nos permite executar código em resposta a mudanças no componente.
    useEffect(() => {

        // Verificamos se a variável "msg" está vazia.
        if (!msg) {
            // Se estiver vazia, tornamos a variável de estado "visible" como false
            // e saímos da função "useEffect".
            setVisible(false);
            return;
        }

        // Se a variável "msg" não estiver vazia, tornamos a variável de estado "visible" como true.
        setVisible(true);

        // Em seguida, configuramos um temporizador (timer) para executar
        // uma função após 3000 milissegundos (ou 3 segundos).
        const timer = setTimeout(() => {
            // Dentro dessa função, tornamos a variável de estado "visible" como false,
            // ou seja, depois de 3 segundos, a mensagem será escondida novamente.
            setVisible(false);
        }, 3000);

        // Por fim, retornamos uma função que será executada quando o componente for
        // desmontado ou quando "msg" mudar. Essa função cancela o temporizador
        // para evitar vazamento de memória.
        return () => clearTimeout(timer);

    }, [msg]); // Este array indica que este efeito depende da variável "msg".


    return (
        <>
           {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    <p>{msg}</p>
                </div>
            )}
        </>
        
    )
}

export default Message
