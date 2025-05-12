import type { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
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
  args: { onClick: action('clicked') },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const JoinUs: Story = {
  args: {
    label: 'Join Us',
    backgroundColor: '#FFE3FB',
    borderColor: '#FF00D9',
    textColor: '#FFFFFF',
  },
};
