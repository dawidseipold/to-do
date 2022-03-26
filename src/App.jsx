import { useState, useEffect, createContext } from 'react';

import ListElement from './components/ListElement/ListElement';
import Form from './containers/Form/Form';
import List from './components/List/List';

import './style.css';

export const FormContext = createContext();

function App() {
  const taskInitialState = {
    id: null,
    title: '',
    category: null,
  };

  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [task, setTask] = useState(taskInitialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <>
      <h1>To-Do List</h1>

      <FormContext.Provider value={{ task, tasks, setTask, setTasks, taskInitialState }}>
        <Form inputPlaceholder="What do you want to do?" buttonText="Add" />

        <List>
          {tasks.map((task, key) => (
            <ListElement key={key} value={task.title} id={task.id} />
          ))}
        </List>
      </FormContext.Provider>
    </>
  );
}

export default App;
