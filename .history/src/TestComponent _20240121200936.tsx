import React, { useState } from 'react'

interface Props {
  text: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{count}</h2>
    </div>
  )
}

export default TestComponent 
