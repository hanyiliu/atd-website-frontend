import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { LoadingIndicatorComponent } from './loading-indicator.component';

const meta: Meta<LoadingIndicatorComponent> = {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicatorComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LoadingIndicatorComponent>;

export const Primary: Story = {
  args: {},
};
