import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { StyledInput } from './Input.style';
import { FormContext } from '../../App';

const Input = (props) => {
  const { task, setTask } = useContext(FormContext);

  const handleUserInput = (e) => {
    setTask({ ...task, id: uuidv4(), title: e.target.value });
  };

  return (
    <StyledInput
      placeholder={props.placeholder}
      value={task.title || ''}
      onChange={handleUserInput}
    />
  );
};

export default Input;
