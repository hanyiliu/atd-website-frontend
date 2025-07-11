import type { Meta, StoryObj } from '@storybook/angular';

import { FaqSectionComponent } from './faq-section.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<FaqSectionComponent> = {
  title: 'Components/FaqSection',
  component: FaqSectionComponent,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<FaqSectionComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    faqItems: [
      {
        question: 'What is a lorem question? Lorem ipsum dolor sit amet?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      },
      {
        question: 'Curabitur id sem at nunc blandit feugiat?',
        answer:
          'Curabitur id sem at nunc blandit feugiat. Pellentesque habitant morbi tristique senectus et netus.',
      },
      {
        question: 'Fusce ac lorem dapibus, porta quam vel, dapibus massa?',
        answer:
          'Fusce ac lorem dapibus, porta quam vel, dapibus massa. Nullam facilisis ligula sit amet velit porta volutpat. Sed nec dui non turpis gravida fermentum. Mauris placerat hendrerit eros a commodo.\n\nAliquam erat volutpat. Cras quis facilisis purus. Nullam nec ante sed leo hendrerit dapibus nec eu metus. Sed pulvinar, orci vitae dapibus fermentum, odio erat fringilla libero, eget dictum diam justo nec augue.',
      },
      {
        question: 'Praesent ut libero sit amet nulla sollicitudin tincidunt?',
        answer:
          'Praesent ut libero sit amet nulla sollicitudin tincidunt. Suspendisse potenti. Donec at dui non risus ultricies finibus. Integer dapibus, nibh in vestibulum porta, sapien lacus vulputate diam, at tincidunt ipsum arcu nec nisl.',
      },
    ],
  },
};