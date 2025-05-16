import type { Meta, StoryObj } from '@storybook/angular';

import { WhatWeOfferComponent } from './what-we-offer.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<WhatWeOfferComponent> = {
  title: 'Components/WhatWeOffer',
  component: WhatWeOfferComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<WhatWeOfferComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    clientOffers: [
      {
        title: 'Digital Branding & Web Design',
        description:
          'ATD help create strong online brands that stand out. Our creative team, consisting of graphic designers, media producers, UX/UI designers, and developers, works together to define the brand’s voice and visuals. We also design webpages that increase user engagement.',
      },
      {
        title: 'Brand Consultation',
        description:
          'ATD creates campaigns that help promote your brand. From media production to social media, we ensure your brand’s messages and values connect with your audience. Our goal is to help grow your business with effective and creative marketing methods.',
      },
      {
        title: 'Social Media Services',
        description:
          'ATD’s social media services cover everything from content creation and strategy to community management. Whether you are starting from the ground up or expanding, ATD will help you build connections, grow your audience, and boost engagement with the new content you want to share.',
      },
      {
        title: 'Low-risk. Free of Charge.',
        description:
          'ATD values trust and amplification, believing that great partnerships start with trust. That is why we offer services at no cost, allowing businesses to experience our passion and professional expertise. We want businesses to feel confident in the value we bring and to invest in success, risk-free.',
      },
    ],
    studentOffers: [
      {
        title: 'Community ',
        description:
          'ATD provides an inclusive environment where both students and non-students from diverse backgrounds have the opportunity to collaborate and grow together. Joining ATD means building relationships, developing professional skills, and contributing to the community.',
      },
      {
        title: 'Professional Development',
        description:
          'ATD offers mentorships, hands-on experience, and learning opportunities to help sharpen your skills and grow professionally. By working alongside diverse team members, you will gain expertise needed to succeed ad build a strong foundation for your future career.',
      },
      {
        title: 'Student-Client Experience',
        description:
          'ATD gives students the opportunity to work with real clients and gain hands-on experience. We offer entry-level positions with no prior experience required. Our goal is to help you build your portfolio, improve communication with clients, and work with a cross-functional team.',
      },
      {
        title: 'Networking ',
        description:
          'As a student, you will have the chance to connect with other members of ATD as well as with clients. Through events, collaborations, and client interactions, we help you build valuable relationships that open doors and lead to new opportunities in your career.',
      },
    ],
  },
};
