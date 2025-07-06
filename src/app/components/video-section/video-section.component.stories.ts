import type { Meta, StoryObj } from '@storybook/angular';

import { VideoSectionComponent } from './video-section.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<VideoSectionComponent> = {
  title: 'Components/VideoSection',
  component: VideoSectionComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<VideoSectionComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
