import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto'; // verifica na pasta que tem um arquivo index.js e já chama por ele (padrão mais)

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto />
    </div>
  );
}

export default App;
