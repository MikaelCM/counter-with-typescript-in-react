import { useState } from "react"

const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0); 

    const increment = () => {
        setCounter((prev) => prev + 1);
    };
    const decrement = () => {
        setCounter((prev) => prev - 1);
    }
    const reset = () => {
        setCounter(0)
    };

    return (
        <div>
            <header>
                <h1>Desafio - Roleplay</h1>
            </header>

            <main>
                <div>
                    <div>
                        <h2>{counter}</h2>
                    </div>

                    <div>
                        <button onClick={decrement}>-</button>
                        <button onClick={reset}>Reset</button>
                        <button onClick={increment}>+</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Counter