import { useState } from 'react'
import UFSelect from './components/inputSelect'
import data from './resources/estados_municipios.json'


function App() {
  const [selectedItem, setSetlectedItem] = useState(data[0])

  const handleChange = (value: string) => {
    setSetlectedItem(value);
    console.log(selectedItem);
  }

  return (
    <div>
      <UFSelect onSelect={handleChange}></UFSelect><br/>
      <label>Municípios de {selectedItem.grupo}: </label><br/>
      <ol>
        {selectedItem.itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default App
