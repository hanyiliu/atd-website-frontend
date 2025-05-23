import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { InfoCardComponent } from './info-card.component';

const meta: Meta<InfoCardComponent> = {
  title: 'Components/infoCard',
  component: InfoCardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InfoCardComponent>;

export const Primary: Story = {
  args: {
    title: 'Mission',
    image: '/images/target.svg',
    details: [
      'To contribute exceptional pro-bono design to all clients.',
      'To strengthen the design community at UC Davis by bringing all disciplines together as a unified community.',
      'To build an exceptional professional network for students to gain client-based design experience.',
    ],
  },
};
