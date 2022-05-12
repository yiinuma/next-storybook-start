import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Task } from './Task';

export default {
  title: 'Task',
  component: Task,
  parameters: {},
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

const defaultTask = {
  id: '1',
  title: 'OK Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2021, 0, 10, 10, 0),
};

export const Default = Template.bind({});
Default.args = { task: defaultTask };

export const Pinned = Template.bind({});
Pinned.args = { task: { ...defaultTask, state: 'TASK_PINNED' } };

export const Archived = Template.bind({});
Archived.args = { task: { ...defaultTask, state: 'TASK_ARCHIVED' } };
