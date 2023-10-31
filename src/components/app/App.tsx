
import { Gentlemans } from '../gentleman/gentleman'
import { Info } from '../info/info'
import './App.css'

export function App() {

  return (
    <div>
      <Info title={''}></Info>
      <main className="main">
        <ul className="gentlemen">
          <Gentlemans theGentlemans={[]}></Gentlemans>
        </ul>
      </main>
    </div>
  )
}

export default App
