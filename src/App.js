import './App.css';
import braskLogo from './imagenes/logo-brask.jpg';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='brask-logo-contenedor'>
        <img 
          src={braskLogo}
          className='brask-logo'
          alt='Logo de Brask' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas  />
      </div>
    </div>
  );
}

export default App;
