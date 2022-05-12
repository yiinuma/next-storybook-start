import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { TaskList } from './TaskList';
import * as TaskStories from './Task.stories';
import { TaskType } from './Task';

export default {
  title: 'TaskList',
  component: TaskList,
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => <TaskList {...args} />;

const defaultTask = TaskStories.Default.args?.task as TaskType;

const defaultTasks = [
  { ...defaultTask, id: '1', title: 'Task 1' },
  { ...defaultTask, id: '2', title: 'Task 2' },
  { ...defaultTask, id: '3', title: 'Task 3' },
  { ...defaultTask, id: '4', title: 'Task 4' },
  { ...defaultTask, id: '5', title: 'Task 5' },
  { ...defaultTask, id: '6', title: 'Task 6' },
];
export const DefaultTasks = Template.bind({});
DefaultTasks.args = { tasks: defaultTasks };

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...defaultTasks.slice(0, 5),
    {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED',
      updatedAt: new Date(2021, 0, 10, 10, 0),
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = { tasks: [], loading: true };

export const Empty = Template.bind({});
Empty.args = { ...Loading.args, loading: false };
