import React from 'react';
import { StyledList } from './List.style';

const List = (props) => {
  return <StyledList>{props.children}</StyledList>;
};

export default List;
