import React, { useState, createContext, useContext } from 'react';

import { FormContext } from '../../App';

import { StyledListElement } from './ListElement.style';

import IconWrapper from '../IconWrapper/IconWrapper';
import { MoreHorizontal, Check, X } from 'react-feather';

import TaskModal from '../TaskModal/TaskModal';

export const ListElementContext = createContext();

const ListElement = (props) => {
  const { tasks, setTasks } = useContext(FormContext);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(tasks[0]);

  const toggleComplete = () => {
    setTasks(
      tasks.map((task) =>
        task.id === props.task.id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <StyledListElement task={props.task}>
      <nav>
        <Check onClick={toggleComplete} strokeWidth={3} />
        <span>{props.task.title}</span>
        <IconWrapper onClick={() => setModalOpen((prevModalOpen) => !prevModalOpen)}>
          {modalOpen ? <X /> : <MoreHorizontal />}
        </IconWrapper>
      </nav>

      {modalOpen === true ? (
        <ListElementContext.Provider value={{ modalOpen, setModalOpen, toggleComplete }}>
          <TaskModal task={props.task}></TaskModal>
        </ListElementContext.Provider>
      ) : null}
    </StyledListElement>
  );
};

export default ListElement;
