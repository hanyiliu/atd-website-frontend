import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { LoopComponent } from './loop.component';

const meta: Meta<LoopComponent> = {
  title: 'Components/Loop',
  component: LoopComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LoopComponent>;

export const Primary: Story = {
  args: {},
};
