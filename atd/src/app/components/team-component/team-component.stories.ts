import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TeamComponentComponent } from './team-component.component';

const meta: Meta<TeamComponentComponent> = {
  title: 'Components/TeamComponent',
  component: TeamComponentComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TeamComponentComponent>;

export const Primary: Story = {
  args: {
    members: {
      image: 'images/nicole.svg',
      title: 'VP of Secretary',
      name: 'Nicole Kim',
    },
  },
};
