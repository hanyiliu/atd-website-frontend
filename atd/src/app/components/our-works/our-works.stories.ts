import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { OurWorksComponent } from './our-works.component';

const meta: Meta<OurWorksComponent> = {
  title: 'Components/OurWorksComponent',
  component: OurWorksComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<OurWorksComponent>;

export const Primary: Story = {
  args: {},
};
