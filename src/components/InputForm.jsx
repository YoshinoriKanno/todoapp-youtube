import React, { useState } from 'react'

const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // タスクを追加する
    setTaskList([
      ...taskList,
      {
        text: inputText,
      },
    ]);    
    console.log(taskList)


  }
  const handleChange = (e) => {
    setInputText(e.target.value)

  }

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>
        <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  )
}

export default InputForm
