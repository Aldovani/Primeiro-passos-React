import React, { useState } from 'react'

function App() {

  

  return (

    <Contador/>
  );
}

export default App;


function Contador() {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  const [contadornum, setcontador] = useState(0);

  return (
    <div>
      <p>Você  clicou {contadornum} vezes</p>
      <button onClick={() => setcontador(contadornum + 1)}>
        Click me
      </button>
    </div>
  );
}