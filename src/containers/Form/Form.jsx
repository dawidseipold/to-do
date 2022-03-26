import React from 'react';
import { StyledForm } from './Form.style';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Form = (props) => {
  return (
    <StyledForm action="">
      <Input placeholder={props.inputPlaceholder} />
      <Button>{props.buttonText}</Button>
    </StyledForm>
  );
};

export default Form;
