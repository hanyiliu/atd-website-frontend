import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { JoinUsHeaderComponent } from './join-us-header.component';

const meta: Meta<JoinUsHeaderComponent> = {
  title: 'Components/JoinUsHeader',
  component: JoinUsHeaderComponent,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      ...story(),
      template: `<div style="background-color: black; padding: 20px;">${story().template}</div>`,
    }),
  ],
};

export default meta;
type Story = StoryObj<JoinUsHeaderComponent>;

export const Primary: Story = {
  args: {},
};
