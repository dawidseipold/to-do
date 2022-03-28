import { useState, useEffect, createContext } from 'react';

import ListElement from './components/ListElement/ListElement';
import TaskForm from './containers/TaskForm/TaskForm';
import List from './components/List/List';

import './style.css';

export const FormContext = createContext();

function App() {
  const taskInitialState = {
    id: null,
    title: '',
    completed: false,
  };

  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [task, setTask] = useState(taskInitialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   console.log(task);
  // }, [task]);

  return (
    <>
      <h1>To-Do List</h1>

      <FormContext.Provider value={{ task, tasks, setTask, setTasks, taskInitialState }}>
        <TaskForm inputPlaceholder="What do you want to do?" buttonText="Add" />

        <List>
          {tasks.map((task, key) => (
            <ListElement key={key} task={{ ...task }} />
          ))}
        </List>
      </FormContext.Provider>
    </>
  );
}

export default App;
