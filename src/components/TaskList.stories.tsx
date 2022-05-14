import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { PureTaskList } from './TaskList';
import { TaskType } from './Task';
import * as TaskStories from './Task.stories';

export default {
  title: 'PureTaskList',
  component: PureTaskList,
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof PureTaskList>;

type Story = ComponentStoryObj<typeof PureTaskList>;

const defaultTask = TaskStories.Default.args?.task as TaskType;

const defaultTasks = [
  { ...defaultTask, id: '1', title: 'Task 1' },
  { ...defaultTask, id: '2', title: 'Task 2' },
  { ...defaultTask, id: '3', title: 'Task 3' },
  { ...defaultTask, id: '4', title: 'Task 4' },
  { ...defaultTask, id: '5', title: 'Task 5' },
  { ...defaultTask, id: '6', title: 'Task 6' },
];
export const DefaultTasks: Story = {
  args: { tasks: defaultTasks },
};

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      ...defaultTasks.slice(0, 5),
      {
        id: '6',
        title: 'Task 6 (pinned)',
        state: 'TASK_PINNED',
        updatedAt: new Date(2021, 0, 10, 10, 0),
      },
    ],
  },
};

export const Loading: Story = {
  args: { tasks: [], loading: true },
};

export const Empty: Story = {
  args: { ...Loading.args, loading: false },
};
