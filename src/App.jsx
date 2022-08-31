import './App.css'
import AfterNoon from './Popup-afternoon'
import DontClick from './Popup-dontclick'
import Morning from './Popup-morning'
import Night from './Popup-night'


function App() {
 
  return (
    <div className="App">
      <Morning/>
      <AfterNoon/>
      <Night/>
      <DontClick/>
    </div>
  )
}

export default App
