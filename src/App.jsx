
import './App.css'

const MainButtons = () => {
  return (
    <div className='main-container'>
      <h5 className="card-title title-center">INCUBADORA DE ABEJAS</h5>
      <div className="button-groups-wrapper">
        <div className='group-left-vertical'>
          <button className="btn btn-warning button-spacing">Visualizacion/Camara</button>
          <button className="btn btn-warning button-spacing">Parametros</button>
          <button className="btn btn-warning button-spacing">Componentes</button>
        </div>
        <div className="right-section-wrapper">
          <div className='group-right-data-list'>
            <div className="data-row">
              <span className="data-label">Temperatura:</span>
              <button className="btn btn-light data-value-button">25.5 °C</button>
            </div>
            <div className="data-row">
              <span className="data-label">Humedad:</span>
              <button className="btn btn-light data-value-button">60 %</button>
            </div>
            <div className="data-row">
              <span className="data-label">Calor Activo:</span>
              <button className="btn btn-warning data-value-button status-on-button">SI</button>
            </div>
            <div className="data-row">
              <span className="data-label">Frio Activo:</span>
              <button className="btn btn-warning data-value-button status-off-button">NO</button>
            </div>
            <div className="data-row">
              <span className="data-label">Frio Activo:</span>
              <button className="btn btn-warning data-value-button status-off-button">NO</button>
            </div>
            <div className="data-row">
              <span className="data-label">Iluminacion:</span>
              <button className="btn btn-warning data-value-button status-off-button">NO</button>
            </div>
          </div>
          <div className='status-box'>
            <h6 className="box-title">Estado de la Máquina</h6>
            <p>Status: OK</p>
            <p>Última Actualización: 14:30</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='min-h-screen'>
      <MainButtons />      
    </div>
  )
}


export default App
