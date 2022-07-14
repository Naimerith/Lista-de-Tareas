import './App.css';
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className='App'>
      <div className='contenedorPrincipal'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
      <div className='footer'>
        Desarrollado por Naimerith 💙
      </div>
    </div>
  );
}

export default App;
