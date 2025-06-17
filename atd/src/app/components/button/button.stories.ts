import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    borderColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    label: {
      control: 'text',
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const JoinUs: Story = {
  args: {
    label: 'Join Us',
    backgroundColor: '#FFE3FB',
    borderColor: '#FF00D9',
    textColor: '#FF00D9',
  },
};
