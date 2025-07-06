import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { OurWorksPageComponent } from './our-works-page.component';

const meta: Meta<OurWorksPageComponent> = {
  title: 'Pages/OurWorksPage',
  component: OurWorksPageComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<OurWorksPageComponent>;

export const Primary: Story = {
  args: {},
};
