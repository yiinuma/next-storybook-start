import initStoryshots from '@storybook/addon-storyshots';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as stories from './TaskList.stories';

initStoryshots();
const { WithPinnedTasks } = composeStories(stories);

describe('TaskList Test', () => {
  it('renders pinned tasks at the start of the list', () => {
    render(<WithPinnedTasks />);
    const values = screen.getAllByDisplayValue(/Task/);
    expect((values[0] as HTMLInputElement).value).toBe('Task 6 (pinned)');
  });
});
