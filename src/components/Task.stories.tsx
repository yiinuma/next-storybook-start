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
const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const Pinned: Story = {
  args: { task: { ...defaultTask, state: 'TASK_PINNED' } },
};

export const Archived: Story = {
  args: { task: { ...defaultTask, state: 'TASK_ARCHIVED' } },
};

export const LongString: Story = {
  args: { task: { ...defaultTask, title: longTitleString } },
};
