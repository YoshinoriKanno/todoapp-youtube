import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Title from './components/Title';
import TodoList from './components/TodoList';
import TestComponent from './components/TestComponent';

function App() {
  const [taskList, setTaskList] = useState([] );
  const [testState, setTestState] = useState(true);
  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
      <TestComponent testState={testState} setTestState={setTestState} />

    </div>
  );
}

export default App;
