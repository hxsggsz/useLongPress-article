import reactLogo from './assets/react.svg'
import './App.css'
import { useLongPress } from './hooks/useLongPress'

function App() {
  const { event, handlers } = useLongPress()

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>useLongPress hook</h1>
      <div className="card">
        {/* in this way we can pass all the functions to the respectives events in this button */}
        <button {...handlers}>
          Event is: {event}
        </button>
      </div>
    </>
  )
}

export default App
