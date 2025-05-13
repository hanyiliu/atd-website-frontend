import type { Meta, StoryObj } from '@storybook/angular';

import { FaqItemComponent } from './faq-item.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<FaqItemComponent> = {
  title: 'Components/FaqItem',
  component: FaqItemComponent,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<FaqItemComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { 
    "faqItem": {
      "question": "This is a sample question. Lorem ipsum dolor sit amet?",
      "answer": "This is a sample answer response. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    }
  },
};