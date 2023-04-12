import React, { useState } from 'react'


const TestComponent = ({setTestState, testState}) => {
  const [currentStatus, setCurrentStatus] = useState('on')
  const clickButton = () => {
    setTestState(prevState => !prevState)
    if (testState === true) {
      setCurrentStatus('off')
    } else {

      setCurrentStatus('on')
    }
　
  }
  return (
    <div>
      <p>{currentStatus}</p>
      <button onClick={clickButton}>Switch</button>
    </div>
  )
}

export default TestComponent
