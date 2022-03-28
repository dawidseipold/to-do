import React from 'react';
import { StyledIconWrapper } from './IconWrapper.style';

const IconWrapper = (props) => {
  return <StyledIconWrapper onClick={props.onClick}>{props.children}</StyledIconWrapper>;
};

export default IconWrapper;
