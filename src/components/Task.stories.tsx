import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Task, TaskType } from './Task';

export default {
  title: 'Task',
  component: Task,
  parameters: {},
} as ComponentMeta<typeof Task>;

type Story = ComponentStoryObj<typeof Task>;

const defaultTask: TaskType = {
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
