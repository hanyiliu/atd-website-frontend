import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AboutUsPageComponent } from './about-us-page.component';

const meta: Meta<AboutUsPageComponent> = {
  title: 'Pages/AboutUsPage',
  component: AboutUsPageComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AboutUsPageComponent>;

export const Primary: Story = {
  args: {},
};
