import React, { useState } from 'react'

interface Props {
  text: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState(0);
  const [inputData, setInputData] = useState("");
  const handleInputChange = (e: React.ChangeEventHandler<HTMLInputElement>) => 
  setInputData(e.target.value);

  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{count}</h2>
      <input type="text" value={inputData} onChange={handleInputChange}/>
      <h2>{inputData}</h2>
    </div>
  )
}

export default TestComponent 
