import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { EventCalenderBoxComponent } from './event-calender-box.component';

const meta: Meta<EventCalenderBoxComponent> = {
  title: 'Components/EventCalenderBox',
  component: EventCalenderBoxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<EventCalenderBoxComponent>;

export const Primary: Story = {
  args: {
    events: [
      {
        day: '22',
        month: 'April',
        title: 'Info Night',
        time: 'TBD',
        location: 'TBD',
      },
      {
        day: '23',
        month: 'April',
        title: 'Design Challenge Workshop',
        time: 'TBD',
        location: 'TBD',
      },
      {
        day: '24',
        month: 'April',
        title: 'Meet the Board',
        time: 'TBD',
        location: 'Frenzy Coffee',
      },
      {
        day: '22',
        month: 'April',
        title: 'Info Night',
        time: 'TBD',
        location: 'TBD',
      },
      {
        day: '23',
        month: 'April',
        title: 'Design Challenge Workshop',
        time: 'TBD',
        location: 'TBD',
      },
    ],
  },
};
