import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MemberComponentComponent } from './member-component.component';

const meta: Meta<MemberComponentComponent> = {
  title: 'Components/MemberComponent',
  component: MemberComponentComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MemberComponentComponent>;

export const Primary: Story = {
  args: {
    member: {
      image: 'images/nicole.svg',
      title: 'VP of Secretary',
      name: 'Nicole Kim',
    },
  },
};
