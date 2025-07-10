import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AboutUsHeaderComponent } from './about-us-header.component';

const meta: Meta<AboutUsHeaderComponent> = {
  title: 'Components/AboutUsHeader',
  component: AboutUsHeaderComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AboutUsHeaderComponent>;

export const Primary: Story = {
  args: {},
};
