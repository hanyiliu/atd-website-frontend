import type { Meta, StoryObj } from '@storybook/angular';
import { ContactBoxComponent } from './contact-box.component';
import { action } from '@storybook/addon-actions';

const meta: Meta<ContactBoxComponent> = {
  title: 'Components/ContactBox',
  component: ContactBoxComponent,
  tags: ['autodocs'],
  argTypes: {
    email: { control: 'text' }, // Enable email input from Storybook
    onSubmit: { action: 'email submitted' }, // Capture the submit event
  },
};

export default meta;
type Story = StoryObj<ContactBoxComponent>;

export const Primary: Story = {
  args: {
    onSubmit: action('email submitted'),
  },
};
