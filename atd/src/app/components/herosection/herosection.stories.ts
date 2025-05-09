import type { Meta, StoryObj } from '@storybook/angular';
import { HeroSectionComponent } from './herosection.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<HeroSectionComponent> = {
  title: 'Components/Hero Section',
  component: HeroSectionComponent,
  tags: ['autodocs'],
  args:{},
};

export default meta;
type Story = StoryObj<HeroSectionComponent>;

// Default Hero Section Story
export const Default: Story = {
  args: {
  },
};

