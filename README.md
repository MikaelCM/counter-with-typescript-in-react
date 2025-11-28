# 🌟Desafio – Roleplay (Contador em React + TypeScript)
<p align="center"> <img src="https://img.shields.io/badge/React-18.0+-61dafb?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/Vite-4.0+-646cff?style=for-the-badge&logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /> </p>

Um projeto simples e funcional desenvolvido com React + TypeScript para treinar estados e eventos.
O desafio consiste em criar um contador que incrementa, decrementa e reseta o valor exibido na tela.

🎯 Objetivo

Criar um contador com:

➕ Incremento

➖ Decremento

🔄 Reset

🎨 Layout simples e funcional

🧠 Tecnologias Utilizadas

⚛ React

🔷 TypeScript

⚡ Vite

🎨 CSS

📁 Estrutura do Projeto
src/
 ├─ components/
 │   └─ Counter.tsx
 ├─ App.tsx
 ├─ App.css
 └─ main.tsx

🧩 Componente Principal (Counter.tsx)
```React
import { useState } from "react"

const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0); 

    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev - 1);
    const reset = () => setCounter(0);

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
```
▶️ Como Rodar o Projeto
🔹 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPO.git

🔹 2. Instale as dependências
npm install

🔹 3. Rode em desenvolvimento
npm run dev


Abra no navegador:

http://localhost:5173/

🔹 4. Gerar build para produção
npm run build

🤝 Contribuição

Sinta-se livre para abrir issues e enviar pull requests.
Feedbacks são sempre bem-vindos! ✨

📜 Licença

Este projeto está licenciado sob a MIT License.
