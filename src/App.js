import React from 'react'
import './App.css'
const App = () => {
  return (
    <section className='conteiner'>
      <header className='header-conteiner'>
        <span className='header-span'>
          Tasks | Works
        </span>
      </header>
      <section className='Lista-introducao'>
        <h1> L i s t a </h1>
        <input placeholder='Digite sua Task' required />
        <button>Adicionar Task</button>
      </section>

    <section className='lista-tasks'>
      <form>
        <ul>
          <li>Lethal Company</li>
          <li>Hollow Kight</li>
          <li>Terraria</li>
        </ul>
      </form>
    </section>
    </section>
  )
}

export default App