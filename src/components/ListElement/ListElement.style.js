import styled, { css } from 'styled-components';

export const StyledListElement = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 0.25rem;
  border: 1px solid white;
  color: white;

  padding: 1rem;
  width: 100%;

  transition: all 0.1s ease-in-out;

  ${(props) =>
    props.task.completed &&
    css`
      border: 1px solid hsla(145, 75%, 50%, 0.75);
    `}

  > nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 1rem;

    > svg {
      background: transparent;
      color: hsla(0, 0%, 100%, 0.375);
      border: 1px solid hsla(0, 0%, 100%, 0.325);
      border-radius: 50%;
      padding: 0.125rem;

      transition: background 0.1s ease-in-out, border 0.1s ease-in-out;

      &:hover {
        border: 1px solid hsla(145, 75%, 50%, 0.25);
        background: hsla(145, 75%, 50%, 0.25);
        cursor: pointer;
      }

      ${(props) =>
        props.task.completed &&
        css`
          border: 1px solid hsla(145, 75%, 50%, 0.75);
          background: hsla(145, 75%, 50%, 0.75);
          color: hsla(0, 0%, 100%, 0.75);
        `}
    }

    > span {
      margin-right: auto;
    }
  }
`;
