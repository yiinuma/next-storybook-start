import React from 'react';

export type TaskType = {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
};

type TaskProps = {
  task: TaskType;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

export const Task = ({ task, onArchiveTask, onPinTask }: TaskProps) => {
  return (
    <div className={`list-item ${task.state}`}>
      <label className="checkbox">
        <input type="checkbox" defaultChecked={task.state === 'TASK_ARCHIVED'} disabled={true} name="checked" />
        <span className="checkbox-custom" onClick={() => onArchiveTask(task.id)} />
      </label>
      <div className="title">
        <input type="text" value={task.title} readOnly={true} placeholder="Input title" style={{ textOverflow: 'ellipsis' }} />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {task.state !== 'TASK_ARCHIVED' && (
          <a onClick={() => onPinTask(task.id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};
