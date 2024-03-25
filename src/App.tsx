import { useState } from 'react'
import './App.css'
import githubLogo from './assets/github-mark/github-mark-white.svg'
import Navbar from "./components/navbar.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Navbar/>
          {/*    TODO add HomePage to show project demos */}
          {/*<HomePage/>*/}
          {/*<div className="card">*/}
          {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
          {/*        count is {count}*/}
          {/*    </button>*/}
          {/*    <p>*/}
          {/*        Edit <code>src/App.tsx</code> and save to test HMR*/}
          {/*    </p>*/}
          {/*</div>*/}

      </>
  )
}

export default App
