import type { Meta, StoryObj } from '@storybook/angular';

import { OfferCardComponent } from './offer-card.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<OfferCardComponent> = {
  title: 'Components/OfferCard',
  component: OfferCardComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<OfferCardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Digital Branding & Web Design',
    description:
      'ATD help create strong online brands that stand out. Our creative team, consisting of graphic designers, media producers, UX/UI designers, and developers, works together to define the brand’s voice and visuals. We also design webpages that increase user engagement.',
  },
};
