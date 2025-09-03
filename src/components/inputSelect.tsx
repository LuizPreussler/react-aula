import { useState } from "react";
import data from '../resources/estados_municipios.json'

interface SelectItemProps {
    onSelect(value: string): void;
}

function UFSelect(props: SelectItemProps) {
  const [list, setList] = useState(data);

  const handleChange = (e: any) => {
    props.onSelect(list[e.target.value-1].grupo)
  };

  return (
    <select name="selectUF" onChange={handleChange}>
        {list.map((listItem) => (
            <option key={listItem.id} value={listItem.id}>{listItem.grupo}</option>
        ))}
    </select>
  )
}

export default UFSelect