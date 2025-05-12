import type { Meta, StoryObj } from '@storybook/angular';
import { EventBoxComponent } from './event-box.component';

const meta: Meta<EventBoxComponent> = {
  title: 'Components/EventBox',
  component: EventBoxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<EventBoxComponent>;

export const Primary: Story = {
  args: {
    day: '22',
    month: 'April',
    title: 'Info Night',
    time: 'TBD',
    location: '@TBD',
    isNext: true,
  },
};
