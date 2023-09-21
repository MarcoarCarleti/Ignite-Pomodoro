import { createContext, useContext, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CyclesContext = createContext({} as any)

function NewCycleForm() {
  let { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <div>
      <h1>NewCycleForm: {activeCycle}</h1>

      <button
        onClick={() => {
          setActiveCycle(activeCycle++)
        }}
      >
        Alterar Valor
      </button>
    </div>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)

  return <h1>CountDown: {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <NewCycleForm />
      <Countdown />
    </CyclesContext.Provider>
  )
}
