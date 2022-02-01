import { useState } from 'react'

export default function App() {

    // let numero = 10
    const [numero, setNumero] = useState(0)

    function aumentar() {
      setNumero(numero + 1)
    }

    function disminuir() {
        setNumero(numero - 1)
    }

    return <section>
        <h1>Contador</h1>
        <p id="result">{numero}</p>
        <button onClick={disminuir}>menos</button>
        <button onClick={aumentar}>más</button>
        
    </section>
}