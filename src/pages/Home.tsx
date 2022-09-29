import reactLogo from '../assets/react.svg'
import { useRecoilState } from 'recoil'
import { counterState } from '../store'

export function Home() {
  const [count, setCount] = useRecoilState(counterState)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TS + TailwindCSS</h1>
      <div>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  )
}
