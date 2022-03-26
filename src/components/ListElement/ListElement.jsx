import React, { useContext } from 'react';
import { StyledListElement } from './ListElement.style';
import { Trash2, Edit } from 'react-feather';
import { FormContext } from '../../App';

const ListElement = (props) => {
  const { tasks, setTasks } = useContext(FormContext);

  const removeTask = () => {
    setTasks();
  };

  return (
    <StyledListElement>
      <span>{props.value}</span>
      <Edit />
      <Trash2 onClick={() => setTasks(tasks.filter((task) => props.id !== task.id))} />
    </StyledListElement>
  );
};

export default ListElement;
