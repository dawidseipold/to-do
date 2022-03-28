import styled, { css } from 'styled-components';
import { StyledIconWrapper } from '../IconWrapper/IconWrapper.style';

export const StyledTaskModal = styled.div`
  width: 100%;

  .settings {
    &__navigation {
      display: flex;
      column-gap: 1rem;
      align-items: center;
      justify-content: flex-start;
      width: 100%;

      &__button {
        border: 1px solid hsla(0, 0%, 100%, 0.25);
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        transition: background 0.1s ease-in-out;

        &:hover {
          cursor: pointer;
        }

        &--delete {
          margin-left: auto;

          &:hover {
            border-color: hsl(345, 75%, 50%);
            color: hsl(345, 75%, 50%);
          }
        }
      }

      ${StyledIconWrapper} {
        margin-left: auto;

        &:hover {
          background: hsla(0, 0%, 0%, 0.25);
        }
      }
    }
  }
`;
