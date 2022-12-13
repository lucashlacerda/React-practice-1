import React,{ useState } from 'react'
import './App.css'

function App() {

  const [bolas, setBolas]= useState([]);
  const [bolasRemovidas, setBolasRemovidas]= useState([]);

  function handleClick(e){
    const {pageX, pageY} = e;
    setBolas([...bolas, {x: pageX, y: pageY}]);

  }

  function removeUltimo(){
      setBolasRemovidas([...bolasRemovidas, bolas[bolas.length -1]]);
      const atualBolas = [...bolas];
      atualBolas.pop();
      setBolas(atualBolas);
  }
  function readicionaUltimo(){
      setBolas(prevBolasArray => [...prevBolasArray, bolasRemovidas[bolasRemovidas.length -1]]);
      const atualBolas = [...bolasRemovidas];
      atualBolas.pop();
      setBolasRemovidas(atualBolas);
  }

  return (
    <>
      <button onClick={removeUltimo} disabled={bolas.length == 0}>Remover</button>
      <button onClick={readicionaUltimo} disabled={bolasRemovidas.length == 0}>Readicionar</button>
      <div className="App" onClick={handleClick}>
          {bolas.map((pontoClicado, index) => {
            return(
              <div 
                key={index} 
                style={{
                  position:'absolute',
                  left: pontoClicado.x,
                  top: pontoClicado.y,
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'black'
              }}></div>
            )
          })}
      </div>
    </>
  )
}

export default App
