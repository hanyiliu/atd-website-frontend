import type { Meta, StoryObj } from '@storybook/angular';

import { ToggleButtonComponent } from './toggle-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ToggleButtonComponent> = {
  title: 'Components/ToggleButton',
  component: ToggleButtonComponent,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<ToggleButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
  },
};