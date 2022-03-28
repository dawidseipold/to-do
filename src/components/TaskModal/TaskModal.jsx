import React, { useContext } from 'react';
import { FormContext } from '../../App';
import { ListElementContext } from '../ListElement/ListElement';

import { StyledTaskModal } from './TaskModal.style';

const TaskModal = (props) => {
  const { modalOpen, setModalOpen } = useContext(ListElementContext);
  const { tasks, setTasks } = useContext(FormContext);

  return (
    <StyledTaskModal task={props.task}>
      <div className="settings">
        <nav className="settings__navigation">
          <span
            className="settings__navigation__button settings__navigation__button--delete"
            onClick={() => {
              setTasks(tasks.filter((task) => props.task.id !== task.id));
              setModalOpen(false);
            }}
          >
            Delete
          </span>
        </nav>
      </div>
    </StyledTaskModal>
  );
};

export default TaskModal;
