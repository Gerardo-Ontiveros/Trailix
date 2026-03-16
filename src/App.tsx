import { TrailixComingSoon } from './components/CommingSoon'

function App() {
  const dev = import.meta.env.VITE_APP_MODE

  return <>{dev === 'development' ? <TrailixComingSoon /> : <h1>Hello World</h1>}</>
}

export default App
