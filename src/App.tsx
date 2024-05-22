import globalStyle from './globalStyle.module.css'
import MapContainer from './components/MapContainer/MapContainer'

function App() {
  return (
    <>
      <div className={globalStyle.mapContainerWrapper}>
        <MapContainer />
      </div>
    </>
  )
}

export default App
