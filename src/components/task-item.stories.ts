import type { ComponentStoryObj } from '@storybook/react';
import { TaskItem, Task } from './task-item';

type Story = ComponentStoryObj<typeof TaskItem>;

// eslint-disable-next-line import/no-anonymous-default-export
export default { component: TaskItem };

const defaultTask: Task = {
  id: '1',
  title: 'OK Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2021, 0, 10, 10, 0),
};

export const Default: Story = {
  args: { task: defaultTask },
};

export const Pinned: Story = {
  args: { task: { ...defaultTask, state: 'TASK_PINNED' } },
};

export const Archived: Story = {
  args: { task: { ...defaultTask, state: 'TASK_ARCHIVED' } },
};
