import type { Meta, StoryObj } from '@storybook/angular';

import { TeamValuesCarouselComponent } from './team-values-carousel.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TeamValuesCarouselComponent> = {
  title: 'Components/TeamValuesCarousel',
  component: TeamValuesCarouselComponent,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<TeamValuesCarouselComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};