import React, { useContext } from 'react';

import { StyledButton } from './Button.style';
import { FormContext } from '../../App';

const Button = (props) => {
  const { task, tasks, setTask, setTasks, taskInitialState } = useContext(FormContext);

  const resetInputField = () => {
    setTask({ ...taskInitialState });
  };

  return (
    <StyledButton
      onClick={(e) => {
        e.preventDefault();

        if (task.title === '') return;

        setTasks([...tasks, task]);
        resetInputField();
      }}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
