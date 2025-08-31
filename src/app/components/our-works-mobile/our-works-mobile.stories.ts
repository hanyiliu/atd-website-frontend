import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { OurWorksMobileComponent } from './our-works-mobile.component';

const meta: Meta<OurWorksMobileComponent> = {
  title: 'Components/OurWorksMobileComponent',
  component: OurWorksMobileComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<OurWorksMobileComponent>;

export const Primary: Story = {
  args: {},
};
