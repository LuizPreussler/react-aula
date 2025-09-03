import { useState } from 'react'
import UFSelect from './components/inputSelect'


function App() {
  const [selectedItem, setSetlectedItem] = useState("")

  const handleChange = (value: string) => {
    setSetlectedItem(value);
  }

  return (
    <div>
      <label>Estado selecionado: {selectedItem}</label>
      <br/>
      <UFSelect onSelect={handleChange}></UFSelect>
    </div>
  )
}

export default App
