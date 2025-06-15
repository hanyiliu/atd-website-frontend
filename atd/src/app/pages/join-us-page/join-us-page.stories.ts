import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { JoinUsPageComponent } from './join-us-page.component';

const meta: Meta<JoinUsPageComponent> = {
  title: 'Pages/JoinUsPage',
  component: JoinUsPageComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<JoinUsPageComponent>;

export const Primary: Story = {
  args: {},
};
