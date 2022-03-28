import React, { useContext } from 'react';

import { StyledSelect } from './Select.style';
import { FormContext } from '../../App';

const Select = (props) => {
  const { task, setTask } = useContext(FormContext);

  return (
    <StyledSelect
      onChange={(e) => {
        setTask({ ...task, settings: { ...task.settings, priority: e.target.value } });
      }}
    >
      {props.children}
    </StyledSelect>
  );
};

export default Select;
