import type { Meta, StoryObj } from '@storybook/angular';

import { ValuesSectionComponent } from './values-section.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ValuesSectionComponent> = {
  title: 'Components/ValuesSection',
  component: ValuesSectionComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<ValuesSectionComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
