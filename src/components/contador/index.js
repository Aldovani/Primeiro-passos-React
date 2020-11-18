import React, { Component } from 'react';
import './styles.css';

export default class Contador extends Component {
  state = {
    total: 0,
    valorInput: 0,
  }

  componentDidMount() {
    this.addnumber()
    this.removenumber()
    this.setValue()
  }

  setValue = () => {

    const valueInput = document.getElementById('input-valor').value
    if (valueInput !== '') {
      console.log('valueInput')
      const valorInt = Number(valueInput)
      this.setState({ valorInput: valorInt })

    }
    else {
      this.setState({ valorInput: 1 })
    }
  }

  addnumber = () => {
    const number = this.state.total + this.state.valorInput
    this.setState({ total: number })
  }

  removenumber = () => {
    const number = this.state.total - this.state.valorInput
    this.setState({ total: number })

  }

  resetnumber = () => {
    const number = 0
    this.setState({ total: number })
    this.setState({ valorInput: document.getElementById('input-valor').value = 1 })

  }

  render() {

    return (
      <div className="contador">
       
        <div className="contador-numero">
          <p> {this.state.total}</p>
        </div>

        <div className="contador-botao">
          <button id="botao-add" onClick={this.addnumber}><p>+</p></button>

          <button id="botao-remove" onClick={this.removenumber}><p>-</p></button>

          <button id="botao-reset" onClick={this.resetnumber}><p>Resetar</p></button>

        </div>
       
        <div className="contador-input">
          <label htmlFor="">Digite um valor:</label>
          <input type="number" id="input-valor" onChange={this.setValue} defaultValue={1} />

        </div>


      </div>
    );
  }
}
