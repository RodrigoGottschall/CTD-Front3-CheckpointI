import { useState } from 'react'
import { Card } from './Card'
import './index.css'

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
// Aqui você irá criar os Estados para manipular os Inputs
function App() {
  const [nameColor, setNameColor] = useState('')
  const [codeColor, setCodeColor] = useState('')
  const [allColors, setAllColors] = useState([])

  function addColor(event) {
    event.preventDefault()

    const newColor = {
      nomeCor: nameColor,
      corHexadecimal: codeColor
    }

    if (codeColor.length !== 6 ) {
      alert('Por favor, verifique os dados inseridos no formulário')
      setNameColor('')
      setCodeColor('')
    } else {
      setAllColors([...allColors, newColor])
    }
  }

  return (
    <div className="App">
      <form className="form-cadastro"
        onSubmit={event => addColor(event)}>
        <h1>Adicionar Nova Cor</h1>
        <div className='comp-container'>
          <div className="comp-input">
            <label htmlFor="nameColor">Nome</label>
            <input type="text"
              className="form-control"
              value={nameColor}
              onChange={event => setNameColor(event.target.value)}
              placeholder="Insira o nome da cor" />
          </div>
          <div className='comp-input'>
            <label htmlFor="codeColor">Cor</label>
            <input type="text"
              className="form-control"
              pattern="[a-fA-F0-9]+"
              maxLength="6"
              value={codeColor}
              onChange={event => setCodeColor(event.target.value)}
              placeholder="Insira a sua cor no formato hexadecimal sem #" />
          </div>
        </div>
        <div className='comp-btn'>
          <button type="submit">ADICIONAR</button>
        </div>
      </form>
      <section>
        <h2>Cores Favoritas</h2>
        <div className='all-cards'>
          {
            allColors.map((cor, i) => {
              return (
                <Card key={i} corData={cor} />
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default App
